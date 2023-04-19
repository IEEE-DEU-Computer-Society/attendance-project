using artikbaslioyz.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace artikbaslioyz.Controllers
{
    public class HomeController : Controller
    {
        private denemeEntities2 db = new denemeEntities2();

        // GET: Home
      public ActionResult HomePage()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult HomePage([Bind(Include = "username,uname,surname,email,pword")] deneme4 element)
        {
            if (ModelState.IsValid)
            {
                db.deneme4.Add(element);
                db.SaveChanges();
                return RedirectToAction("HomePage");
            }
            return View();
        }

    }
}