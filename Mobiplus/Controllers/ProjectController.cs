using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mobiplus.Objects;
using Mobiplus.Models;

namespace Mobiplus.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LoadTabItem(ProjectModel.TabItem tabItem)
        {
            //get list data
            var data = new List<ProjectModel.Item>(); //test data

            TestMakedataTabItem(data, null);


            return PartialView("TabItem", data);
        }
        public List<ProjectModel.Item> TestMakedataTabItem(List<ProjectModel.Item> data, string uuid)
        {
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

        [Route("/Project/Detail/{uuid}")]
        public IActionResult Detail(string uuid)
        {
            var model = new ProjectObject.Item();
            if (uuid == "1")
            {
                model.name = "DMMS - Hệ thống quản lý bảo trì ";
                model.description = "Phần mềm DMMS là hệ thống tích hợp nhiều ứng dụng khác nhau thành các module của một gói phần mềm duy nhất, giúp tự động hoá từ A đến Z các hoạt động liên quan tới tài nguyên của doanh nghiệp.Mục đích của phần mềm DMMS là tạo ra một hệ thống dữ liệu tự động hợp nhất và xuyên suốt qua các phòng ban và khâu hoạt động như quản lý dự án, quản lý công việc, quản lý yêu cầu, quản lý nhân sự,...";
                model.img = "~/image/Project/AIC-DMMS_details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần Tiến Bộ Quốc Tế (AIC)";
                model.listmenu = "Hệ thống quản lý";
                model.time = "05/08/2020";
            }
            else if (uuid == "2")
            {
                model.name = "SmartMWWT - Hệ thống quản lý các trạm nước trên mobile";
                model.description = "Phần mềm được Thiết kế & Phát triển bởi MobiPlus. Giải pháp tối ưu cho việc quản lý được nhiều trạm nước và gửi thông báo cần xử lý tới thiết bị di động cá nhân tạo được tính tiện dụng hơn.";
                model.img = "~/image/Project/AIC-SmartMWWT details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần Tiến Bộ Quốc Tế (AIC)";
                model.listmenu = "Ứng dụng trên Mobile";
                model.time = "15/08/2021";
            }
            else if (uuid == "3")
            {
                model.name = "VMS - Quản Lý Tầu Biển";
                model.description = "Hệ thống quản lý lịch trình,cảnh báo,cứu hộ,hoạt động, thông tin cho nhau của các tầu trên biển như tầu chở hàng, tầu đánh cá, tầu du lịch";
                model.img = "~/image/Project/AIC-VMSdetails.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần Tiến Bộ Quốc Tế (AIC)";
                model.time = "01/02/2020";
            }
            else if (uuid == "4")
            {
                model.name = "AIO - Hệ thống quản lý cho doanh nghiệp vừa và nhỏ";
                model.description = "Phần mềm được phát triển bởi cty Mobiplus . Phần mềm giúp các doanh nghiệp quản lý được công việc, nhân công , hàng hóa ,đại lý...";
                model.img = "~/image/Project/App AIO DMMS_details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần tin học và truyền thông  Mobiplus";
                model.listmenu = "Hệ  thống quản lý";
                model.time = "01/07/2021";
            }
            else if (uuid == "5")
            {
                model.name = "SportTV - Ứng dụng thể thao giành cho môn bóng bàn";
                model.description = "Khi sử dụng ứng dụng SportTV người dùng có thể chia sẻ, trao đổi các vấn đề quan tâm, cập nhật tin tức bóng bàn và thông tin các giải đấu trong nước cũng như quốc tế, tìm kiếm giao lưu các câu lạc bộ ";
                model.img = "~/image/Project/App-Sport TV details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần truyền thôngSportTV";
                model.listmenu = "Ứng dụng trên mobile";
                model.time = "01/02/2019";
            }
            else if (uuid == "6")
            {
                model.name = "AIO - Hệ thống quản lý cho doanh nghiệp vừa và nhỏ";
                model.description = "Phần mềm được phát triển bởi cty Mobiplus . Phần mềm giúp các doanh nghiệp quản lý được công việc, nhân công , hàng hóa ,đại lý...";
                model.img = "~/image/Project/web AIO DMMS_details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần tin học và truyền thông  Mobiplus";
                model.listmenu = "Hệ thống quản lý";
                model.time = "01/07/2021";
            }
            else if (uuid == "7")
            {
                model.name = "Website  thể thao giành riêng cho môn bóng bàn";
                model.description = "Khi sử dụng ứng dụng SportTV người dùng có thể chia sẻ, trao đổi các vấn đề quan tâm, cập nhật tin tức bóng bàn và thông tin các giải đấu trong nước cũng như quốc tế, tìm kiếm giao lưu các câu lạc bộ ";
                model.img = "~/image/Project/Web-SportTV_details.png";
                model.uuid = uuid;
                model.customer_name = "Công ty cổ phần truyền thông SportTV";
                model.listmenu = "Website";
                model.time = "05/08/2021";
            }
            return View("Detail/Detail", model);
        }
    }
}
