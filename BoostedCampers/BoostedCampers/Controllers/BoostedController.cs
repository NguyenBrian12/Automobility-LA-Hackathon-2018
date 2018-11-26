using BoostedCampers.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace BoostedCampers.Controllers
{
    [RoutePrefix("api/test")]
    public class BoostedController : ApiController
    {

        private string queueInsights;
        private string merchantSearch;

        [HttpPost, Route("insight")]
        public HttpResponseMessage TestApi()
        {
            var boostedServices = new BoostedServices();
            string messageDate = DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fff");
            queueInsights =
                "{"
                + "\"requestHeader\": {"
                    + "\"messageDateTime\": \"" + messageDate + "\","
                    + "\"requestMessageId\": \"6da60e1b8b024532a2e0eacb1af58581\""
                    + "},"
                + "\"requestData\": {"
                    + "\"kind\": \"predict\""
                + "}"
                    + "}";
            string baseUri = "visaqueueinsights/";
            string resourcePath = "v1/queueinsights";
            var result = boostedServices.DoMutualAuthCall(baseUri + resourcePath, "POST", "Visa Queue Test", queueInsights);

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
        [HttpPost, Route("search")]
        public HttpResponseMessage MerchantSearch()
        {
            var boostedServices = new BoostedServices();
            merchantSearch =
               "{"
               + "\"searchAttrList\":{"
                    + "\"merchantName\":\"STARBUCKS\"," +
                    "\"merchantCity\":\"SAN FRANCISCO\"," +
                    "\"merchantState\":\"CA\"," +
                    "\"merchantPostalCode\":\"94127\"," +
                    "\"merchantCountryCode\":\"840\"}," +
                    "\"responseAttrList\":[\"GNSTANDARD\"]," +
                    "\"searchOptions\":{\"wildCard\":[\"merchantName\"]," +
                    "\"maxRecords\":\"5\",\"matchIndicators\":\"true\"," +
                    "\"matchScore\":\"true\"," +
                    "\"proximity\":[\"merchantName\"]}," +
                    "\"header\":{\"requestMessageId\":\"Request_001\"," +
                    "\"startIndex\":\"0\"," +
                    "\"messageDateTime\":\"2018-11-26T16:37:07.903\"}" +
                    "}";
            string baseUri = "merchantsearch/";
            string resourcePath = "v1/search";
            var results = boostedServices.DoMutualAuthCall(baseUri + resourcePath, "POST", "Merchant Search Test", merchantSearch);

            return Request.CreateResponse(HttpStatusCode.OK, results);
        }
    }
}