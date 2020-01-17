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
            string path = Server.MapPath("~/Uploads/");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            if (Request.Files.Count > 0)
            {
                foreach (string key in Request.Files)
                {

               
                        HttpPostedFileBase postedFile = Request.Files[0];
                        postedFile.SaveAs(path + postedFile.FileName);

                        string url = "Uploads/" + postedFile.FileName;

                  
                }
            }
          
            dbContext.RegisterTables.Add(regDetails);
            dbContext.SaveChanges();
            return View();
        }
    }
}