using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AllInOne20.Controllers
{
    public class RegisterController : Controller
    {

        RegisterDbEntities dbContext = new RegisterDbEntities();
        // GET: Register
   
        public ActionResult Index(RegisterTable regDetails)
        {
           
            dbContext.RegisterTables.Add(regDetails);
            dbContext.SaveChanges();
            return View();
        }

        public ActionResult ImagOne()
        {
            string path = Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            if (Request.Files.Count > 0)
            {
                //foreach (string key in Request.Files)
               // {


                    HttpPostedFileBase postedFile = Request.Files[0];
                    postedFile.SaveAs(path + postedFile.FileName);

                    string url1 = "Uploads/" + postedFile.FileName;

                return Json(url1, JsonRequestBehavior.AllowGet);
                // }
            }
            return View();
            
        }

        public ActionResult ImagSecond()
        {
            string path = Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            if (Request.Files.Count > 0)
            {
                //foreach (string key in Request.Files)
                // {


                HttpPostedFileBase postedFile = Request.Files[0];
                postedFile.SaveAs(path + postedFile.FileName);

                string url2 = "Uploads/" + postedFile.FileName;

                return Json(url2, JsonRequestBehavior.AllowGet);
                // }
            }
            return View();
        }

        public ActionResult ImagThree()
        {
            string path = Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            if (Request.Files.Count > 0)
            {
                //foreach (string key in Request.Files)
                // {


                HttpPostedFileBase postedFile = Request.Files[0];
                postedFile.SaveAs(path + postedFile.FileName);

                string url3 = "Uploads/" + postedFile.FileName;

                return Json(url3, JsonRequestBehavior.AllowGet);
                // }
            }
            return View();
        }

        public ActionResult Show()
        {
            List<RegisterTable> getDetails = dbContext.RegisterTables.ToList();
            return Json(getDetails, JsonRequestBehavior.AllowGet);
        }
    }
}