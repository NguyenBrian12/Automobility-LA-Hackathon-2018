using BoostedCampers.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;


namespace BoostedCampers.Controllers
{
    [RoutePrefix("api/test")]
    public class BoostedController : ApiController
    {
        private readonly BoostedServices boostedServices;
        

        public BoostedController(BoostedServices boostedServices)
        {
            this.boostedServices = boostedServices;
        }

        
            
            static string messageDate = DateTime.UtcNow.ToString("yyyy-MM-ddThh:mm:ss");
            string queueInsights =
                "{"
                + "\"requestHeader\": {"
                    + "\"messageDateTime\": \"" + messageDate + "\","
                    + "\requestMessageId\": \"6da60e1b8b024532a2e0eacb1af58581\""
                    + "},"
                + "\"requestData\": {"
                    + "\"kind\": \"predict\""
                + "}"
                    + "}";
        
        [HttpPost, Route("insight")]
        public HttpResponseMessage TestApi()
        {
            string baseUri = "visaqueueinsights/";
            string resourcePath = "v1/queueinsights";
            boostedServices.DoMutualAuthCall(baseUri + resourcePath, "POST", "Visa Queue Test", queueInsights);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }   
    public class LocatorController: ApiController
    {
    }
}