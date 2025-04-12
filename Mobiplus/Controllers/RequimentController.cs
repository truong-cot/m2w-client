using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mobiplus.Models;

namespace Mobiplus.Controllers
{
    public class RequimentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LoadTabItem(RequimentModel.TabItem tabItem)
        {
            var data = new List<RequimentModel.Item>();
           /* for (var i = 0; i < tabItem.num; i++)
            {
                TestMakedataTabItem(data, tabItem.keyTab + i.ToString());
            }*/
            TestMakedataTabItem(data, null);
            return PartialView("TabItem", data);
        }
        public List<RequimentModel.Item> TestMakedataTabItem(List<RequimentModel.Item> data, string uuid)
        {
            data.Add(new RequimentModel.Item
            {
                uuid = "1",
                img = "/image/Requiment/Group 5557.png",
                title = "Mobile App",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển lập trình Mobile App. Đã tốt nghiệp chuyên ngành CNTT. Ưu tiên các bạn có kinh nghiệm làm việc 6 tháng trở lên...",
                time = "01/02/2022",
                number = 1

            });
            data.Add(new RequimentModel.Item
            {
                uuid = "2",
                img = "/image/Requiment/122.png",
                title = "UI/UX  Designer",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 thiết kế UI/UX. Đã tốt nghiệp hoặc năm cuối  chuyên ngành thiết kế . Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về thiết kế UI/UX 6 tháng trở lên...",
                time = "01/10/2021",
                number = 2

            });
            data.Add(new RequimentModel.Item
            {
                uuid = "3",
                img = "/image/Requiment/FrameDesigner1.png",
                title = "Test Fresher",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 bạn Tester. Đã tốt nghiệp hoặc năm cuối  chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm . Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về tester 4 tháng trở lên...",
                time = "30/09/2021",
                number = 2
            });
            data.Add(new RequimentModel.Item
            {
                uuid = "4",
                img = "/image/Requiment/112.png",
                title = "Test Leader",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 1 bạn Test Leader. Đã tốt nghiệp chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm...",
                time = "01/12/2021",
                number = 1

            });
            return data;
        }
        [Route("/Requiment/Detail/{uuid}")]
        public IActionResult Detail(string uuid)
        {
            var model = new RequimentModel.Item();
            if (uuid == "1")
            {

                model.img = "/image/Requiment/Group 5557.png";
                model.title = "Mobile App";
                model.content = "Công ty tin học và truyền thông Mobiplus  cần tuyển lập trình Mobile App. Đã tốt nghiệp chuyên ngành CNTT. Ưu tiên các bạn có kinh nghiệm làm việc 6 tháng trở lên.";
                model.time = "01/02/2022";
                model.number = 1;
                model.uuid = uuid;

            }
            else if (uuid == "2")
            {
                model.img = "/image/Requiment/122.png";
                model.title = "UI/UX  Designer";
                model.content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 thiết kế UI/UX. Đã tốt nghiệp hoặc năm cuối  chuyên ngành thiết kế. Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về thiết kế UI/UX 6 tháng trở lên. Làm việc tại tòa nhà văn phòng 130 Nguyễn Đức Cảnh - Tương Mai - Hoàng Mai - Hà Nội.";
                model.time = "01/10/2021";
                model.number = 2;
                model.uuid = uuid;
            }
            else if (uuid == "2")
            {
                model.img = "/image/Requiment/FrameDesigner1.png";
                model.title = "Test Fresher";
                model.content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 bạn Tester. Đã tốt nghiệp hoặc năm cuối  chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm. Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về tester 4 tháng trở lên. Làm việc tại tòa nhà văn phòng 130 Nguyễn Đức Cảnh - Tương Mai - Hoàng Mai - Hà Nội.";
                model.time = "01/10/2021";
                model.number = 2;
                model.uuid = uuid;
            }
            else if (uuid == "3")
            {
                model.img = "/image/Requiment/112.png";
                model.title = "Test Leader";
                model.content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 1 bạn Test Leader. Đã tốt nghiệp chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm. Ưu tiên các bạn có kinh nghiệm làm việc từ 2 năm trở lên. Làm việc tại tòa nhà văn phòng 130 Nguyễn Đức Cảnh - Tương Mai - Hoàng Mai - Hà Nội.";
                model.time = "01/10/2021";
                model.number = 1;
                model.uuid = uuid;
            }
            return View(model);
        }
    }
}
