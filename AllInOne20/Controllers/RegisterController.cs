using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
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

        public ActionResult Download(string name)
        {
           // string ModifiName = "~" + @"\Uploads\" + name;
           //// string fullName = Server.MapPath(ModifiName);

           // Response.ContentType = "image/jpg";
           // Response.AddHeader("Content-Disposition", "attachment;filename=\"" + ModifiName + "\"");
           // Response.TransmitFile(Server.MapPath(ModifiName));
           // Response.End();
             return View();
        }

        public ActionResult EmailStatus(string email)
        {
            string pass ="7036310703";
            string email1 = "panikarasampath@gmail.com";
            MailMessage mail = new MailMessage();
            mail.To.Add(email);
            mail.From = new MailAddress(email1);
            mail.Subject ="Application Process";
            string Body = "Application Process started Please Contact Pho:7036310703";
            mail.Body = Body;
            
            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential(email1, pass); // Enter seders User name and password  
            smtp.EnableSsl = true;
            smtp.Send(mail);
            return Json(email,JsonRequestBehavior.AllowGet);
        }

    }
}