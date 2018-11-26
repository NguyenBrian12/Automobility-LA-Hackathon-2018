using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BoostedCampers
{
    [RoutePrefix("api/locator")]
    public class Locator : ApiController
    {
        
             readonly MailChimpService mailChimpService;
            //constructor
            public MailChimpController(MailChimpService mailChimpService)
            {
                this.mailChimpService = mailChimpService;
            }

            //GET Lists all---------------------------------------works
            [HttpGet, Route("lists")]
            public async Task<HttpResponseMessage> GetAllLists()
            {
                List<MailChimpList> mailChimp = await mailChimpService.GetAllLists();

                //return the result
                return Request.CreateResponse(HttpStatusCode.OK, new ItemResponse<List<MailChimpList>> { Item = mailChimp });

            }
            // GET api/<controller>
            public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}