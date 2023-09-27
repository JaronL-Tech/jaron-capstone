using FullStackAuth_WebAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStackAuth_WebAPI.Controllers
{
    public class PaymentTiersController : Controller
    {
        private readonly ApplicationDbContext _context;
        public PaymentTiersController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: PaymentTiersController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PaymentTiersController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PaymentTiersController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PaymentTiersController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PaymentTiersController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PaymentTiersController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PaymentTiersController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PaymentTiersController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
