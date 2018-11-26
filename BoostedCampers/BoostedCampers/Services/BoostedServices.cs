using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;

namespace BoostedCampers.Services
{
    public class BoostedServices
    {
        private void LogRequest(string url, string requestBody)
        {
            Debug.WriteLine(url);
            Debug.WriteLine(requestBody);
        }
        private string GetBasicAuthHeader(string userId, string password)
        {
            string authString = userId + ":" + password;
            var authStringBytes = Encoding.UTF8.GetBytes(authString);
            string authHeaderString = Convert.ToBase64String(authStringBytes);
            return "Basic " + authHeaderString;
        }
        private string GetCorrelationId()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(chars, 12).Select(s => s[random.Next(s.Length)]).ToArray()) + "_SC";

        }
        private void LogResponse(string info, HttpWebResponse response)
        {
            string responseBody;
            Debug.WriteLine(info);
            Debug.WriteLine("Response Status: \n" + response.StatusCode);
            Debug.WriteLine("Response Headers: \n" + response.Headers.ToString());
            
            using (var reader = new StreamReader(response.GetResponseStream(), ASCIIEncoding.ASCII))
            {
                responseBody = reader.ReadToEnd();
            }

            Debug.WriteLine("Response Body: \n" + responseBody);
        }
        public string DoMutualAuthCall(string path, string method, string testInfo, string requestBodyString, Dictionary<string, string> headers = null)
        {
            string requestURL = ConfigurationManager.AppSettings["visaUrl"] + path;
            string userId = ConfigurationManager.AppSettings["userId"];
            string password = ConfigurationManager.AppSettings["password"];
            string certificatePath = ConfigurationManager.AppSettings["cert"];
            string certificatePassword = ConfigurationManager.AppSettings["certPassword"];
            string statusCode = "";
            LogRequest(requestURL, requestBodyString);
            // Create the POST request object 
            HttpWebRequest request = WebRequest.Create(requestURL) as HttpWebRequest;
            request.Method = method;
            if (method.Equals("POST") || method.Equals("PUT"))
            {
                request.ContentType = "application/json";
                request.Accept = "application/json";
                // Load the body for the post request
                var requestStringBytes = Encoding.UTF8.GetBytes(requestBodyString);
                request.GetRequestStream().Write(requestStringBytes, 0, requestStringBytes.Length);
            }

            if (headers != null)
            {
                foreach (KeyValuePair<string, string> header in headers)
                {
                    request.Headers[header.Key] = header.Value;
                }
            }

            // Add headers
            request.Headers["Authorization"] = GetBasicAuthHeader(userId, password);
            request.Headers["ex-correlation-id"] = GetCorrelationId();
            // Add certificate
            var certificate = new X509Certificate2(certificatePath, certificatePassword);
            request.ClientCertificates.Add(certificate);

            try
            {
                // Make the call
                using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
                {
                    LogResponse(testInfo, response);
                    statusCode = response.StatusCode.ToString();
                }
            }
            catch (WebException e)
            {
                if (e.Response is HttpWebResponse)
                {
                    HttpWebResponse response = (HttpWebResponse)e.Response;
                    LogResponse(testInfo, response);
                    statusCode = response.StatusCode.ToString();
                }
            }
            return statusCode;
        }
    }
}