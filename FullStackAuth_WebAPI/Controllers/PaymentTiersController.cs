using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

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
        public IActionResult GetPaymenttier()
        {
            var PaymentTiers = _context.PaymentTiers.ToArray();
            return Ok(PaymentTiers);
        }

        // GET: PaymentTiersController/Details/5
        [HttpGet("Payment"), Authorize]
        public IActionResult GetUsersPayment()
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string userId = User.FindFirstValue("id");

                
                var paymentTiers = _context.PaymentTiers.Where(c => c.ID.Equals(userId));

                
                return StatusCode(200, paymentTiers);
            }
            catch (Exception ex)
            {
               
                return StatusCode(500, ex.Message);
            }
        }

        // GET: PaymentTiersController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PaymentTiersController/Create
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] PaymentTier data, int paymentId)
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string PaymentId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(PaymentId))
                {
                    return Unauthorized();
                }


                data.ID = paymentId;


                _context.PaymentTiers.Add(data);
                if (!ModelState.IsValid)
                {

                    return BadRequest(ModelState);
                }
                _context.SaveChanges();


                return StatusCode(201, data);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
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
