using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mobiplus.Models;

namespace Mobiplus.assets.sass
{
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LoadTabItem(BlogModel.TabItem tabItem)
        {
            var data = new List<BlogModel.Item>();

            TestMakedataTabItem(data, null);


            return PartialView("TabItem", data);
        }
        public IActionResult TabItem1()
        {
            return PartialView();
        }
        public List<BlogModel.Item> TestMakedataTabItem(List<BlogModel.Item> data, string uuid)
        {
            data.Add(new BlogModel.Item
            {
                id = "1",
                img = "/image/blog/image-1.png",
                title = "Du lịch Cát Bà - Hạ Long",
                content = "Công ty Mobiplus đi du lịch Cát Bà - Hạ Long 2018",
                time = "02/06/2018",
                theme = "Hoạt động văn hóa"
            });
            data.Add(new BlogModel.Item
            {
                id = "2",
                img = "/image/blog/image.png",
                title = "Du lịch Mai Châu - Hòa Bình",
                content = "Công ty Mobiplus đi du lịch Mai Châu - Hòa Bình",
                time = "30/04/2021",
                theme = "Hoạt động văn hóa"
            });
            data.Add(new BlogModel.Item
            {
                id = "3",
                img = "/image/blog/image-2.png",
                title = "Sinh nhật hàng tháng",
                content = "Công ty Mobiplus tổ chức sinh nhật hàng tháng cho nhân viên",
                time = "30/04/2021",
                theme = "Hoạt động văn hóa"
            });
            data.Add(new BlogModel.Item
            {
                id = "4",

            });
            return data;
        }
        [Route("/Blog/Detail/{uuid}")]
        public IActionResult Detail(string uuid)
        {
            var model = new BlogModel.Item();
            if (uuid == "1")
            {
                model.lsting = new List<string> { "/image/blog/1/1.jpg", "/image/blog/1/2.jpg", "/image/blog/1/3.jpg", "/image/blog/1/4.jpg", "/image/blog/1/6.jpg", "/image/blog/1/7.jpg", "/image/blog/1/8.jpg", "/image/blog/1/9.jpg", "/image/blog/1/10.jpg", "/image/blog/1/11.jpg" };
                model.content = "Công ty Mobiplus đi du lịch Cát Bà - Hạ Long 2018";
                model.time = "30/04/2021";
                model.theme = "Hoạt động văn hóa";
            }
            else if (uuid == "2")
            {
                model.lsting = new List<string>() { "/image/blog/2/1.jpg", "/image/blog/2/2.jpg", "/image/blog/2/3.jpg", "/image/blog/2/4.jpg", "/image/blog/2/5.jpg", "/image/blog/2/6.jpg", "/image/blog/2/7.jpg", "/image/blog/2/8.jpg", "/image/blog/2/9.jpg" };
                model.content = "Công ty Mobiplus đi du lịch Mai Châu - Hòa Bình";
                model.time = "30/04/2021";
                model.theme = "Hoạt động văn hóa";
            }
            else if (uuid == "3")
            {
                model.lsting = new List<string>() { "/image/blog/3/20210628_140450.jpg", "/image/blog/3/20210628_140651.jpg", "/image/blog/3/20210713_143211.jpg", "/image/blog/3/20210713_143214.jpg", "/image/abc.jpg" };

                model.content = "Công ty Mobiplus tổ chức sinh nhật hàng tháng cho nhân viên";
                model.time = "30/04/2021";
                model.theme = "Hoạt động văn hóa";
            }
            else if (uuid == "4")
            {
                model.id = uuid;
            }
            return View(model);
        }
    }
}
