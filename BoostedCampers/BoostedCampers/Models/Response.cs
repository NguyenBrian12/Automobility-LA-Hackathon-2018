using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoostedCampers.Models
{
    public class Response
    {
        public bool matchIndicators { get; set; }
        public bool matchScore { get; set; }
        public ResponseValue responseValues { get; set; }

        
    }
}