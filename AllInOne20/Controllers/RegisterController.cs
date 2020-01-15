using System;
using System.Collections.Generic;
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
    }
}