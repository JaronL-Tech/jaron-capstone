using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace FullStackAuth_WebAPI.Controllers
{
    public class SurveyController : Controller
    {
        // GET: SurveyController
        public ActionResult Index()
        {
            return View();
        }

        // GET: SurveyController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: SurveyController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SurveyController/Create
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] Review data)
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string userId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }


                data.UserId = userId;


                _context.Reviews.Add(data);
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

        // GET: SurveyController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: SurveyController/Edit/5
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

        // GET: SurveyController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: SurveyController/Delete/5
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
