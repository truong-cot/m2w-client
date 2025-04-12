using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mobiplus.Models
{
    public class RequimentModel
    {
        public class TabItem
        {
            public string keyTab { get; set; }
            public int num { get; set; }
        }

        public class Item
        {
            public string uuid { get; set; }
            public string img { get; set; }
            public string title { get; set; }
            public string content { get; set; }
            public string time { get; set; }
            public int number { get; set; }
            
        }
    }
}
