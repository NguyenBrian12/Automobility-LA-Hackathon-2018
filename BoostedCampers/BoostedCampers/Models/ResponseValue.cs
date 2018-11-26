using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoostedCampers.Models
{
    public class ResponseValue
    {
        public string visaMerchantName { get; set; }
        public int visaMerchantId { get; set; }
        public string visaStoreName { get; set; }
        public int visaStoreId { get; set; }
        public string merchantStreetAddress { get; set; }
        public string merchantCity { get; set; }
        public string merchantState { get; set; }
        public string merchantPostalCode { get; set; }
        public int merchantCountryCode { get; set; }
        public string merchantUrl { get; set; }
        public int distance { get; set; }
        public string merchantCategoryCode { get; set; }
        public string merchantCategoryCodeDesc { get; set; }
        public string locationAddressLongitude { get; set; }
        public string locationAddressLatitude { get; set; }
       
    }
}