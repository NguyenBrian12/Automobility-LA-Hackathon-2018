using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoostedCampers.Models
{
    public class SearchAttrList
    {
        public string merchantName { get; set; }
        public string MerchantCategoryCode { get; set; }
        public int merchantCountryCode { get; set; }
        public int distance { get; set; }
        public string DistanceUnit { get; set; }
        public string merchantStreetAddress { get; set; }
        public string merchantCity { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
    }
}