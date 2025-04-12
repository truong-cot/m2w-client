using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mobiplus.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Mobiplus.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Requiment = TestMakedataTabItem();
            ViewBag.Project = TestProjectdataTabItem();
            return View();
        }
        public List<RequimentModel.Item> TestMakedataTabItem()
        {
            var data = new List<RequimentModel.Item>();
            data.Add(new RequimentModel.Item
            {
                uuid = "1",
                img = "/image/Requiment/122.png",
                title = "UI/UX  Designer",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 thiết kế UI/UX. Đã tốt nghiệp hoặc năm cuối  chuyên ngành thiết kế . Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về thiết kế UI/UX 6 tháng trở lên...",
                time = "01/10/2021",
                number = 2

            });
            data.Add(new RequimentModel.Item
            {
                uuid = "2",
                img = "/image/Requiment/FrameDesigner1.png",
                title = "Test Fresher",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 2 bạn Tester. Đã tốt nghiệp hoặc năm cuối  chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm . Ưu tiên các bạn có kinh nghiệm làm việc hoặc thực tập về tester 4 tháng trở lên...",
                time = "30/09/2021",
                number = 2
            });
            data.Add(new RequimentModel.Item
            {
                uuid = "3",
                img = "/image/Requiment/112.png",
                title = "Test Leader",
                content = "Công ty tin học và truyền thông Mobiplus  cần tuyển 1 bạn Test Leader. Đã tốt nghiệp chuyên ngành CNTT, đã từng tham gia khóa học kiểm thử phần mềm...",
                time = "01/12/2021",
                number = 1

            });
            return data;
        }

        public List<ProjectModel.Item> TestProjectdataTabItem()
        {
            var data = new List<ProjectModel.Item>();
            data.Add(new ProjectModel.Item
            {
                uuid = "1",
                path = "/image/Project/App DMMStest.png",
                title = "DMMS - Hệ thống bảo hành bảo trì"

            }
            );
            data.Add(new ProjectModel.Item
            {
                uuid = "2",
                path = "/image/Project/AIC-SmartMWWT.png",
                title = "SmartMWWT - Hệ thống quản lý các trạm nước trên mobile"

            }
           );
            data.Add(new ProjectModel.Item
            {
                uuid = "3",
                path = "/image/Project/AIC-VMS overview.png",
                title = "VMS - Quản Lý Tầu Biển"

            }
          );
            data.Add(new ProjectModel.Item
            {
                uuid = "4",
                path = "/image/Project/AIO-DMMS.png",
                title = "AIO - Ứng dụng quản lý cho doanh nghiệp vừa và nhỏ"

            }

         );
            data.Add(new ProjectModel.Item
            {
                uuid = "5",
                path = "/image/Project/App-Sport TV.png",
                title = "SportTV - Ứng dụng thể thao giành cho môn bóng bàn"

            });
            data.Add(new ProjectModel.Item
            {
                uuid = "6",
                path = "/image/Project/web AIO DMMS.png",
                title = "AIO - Ứng dụng quản lý cho doanh nghiệp vừa và nhỏ"

            });
            data.Add(new ProjectModel.Item
            {
                uuid = "7",
                path = "/image/Project/Web-SportTV.png",
                title = " Website  thể thao giành riêng cho môn bóng bàn"

            });
            return data;
        }
    }
}
