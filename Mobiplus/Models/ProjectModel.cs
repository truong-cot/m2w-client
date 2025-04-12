using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mobiplus.Models
{
    public class ProjectModel
    {
        public class TabItem
        {
            public string keyTab { get; set; }
            public int num { get; set; }
        }

        public class Item
        {
            public string uuid { get; set; }
            public string path { get; set; }
            public string title { get; set; }
        }
    }
}
