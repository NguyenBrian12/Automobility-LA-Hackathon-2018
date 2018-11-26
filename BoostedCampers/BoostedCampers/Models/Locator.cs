using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoostedCampers.Models
{
    public class Locator
    {
        public Header header { get; set; }
        public SearchAttrList searchAttrList { get; set; }
        public string responseAttrList { get; set; }
        public SearchOptions searchOptions { get; set; }

    }
}