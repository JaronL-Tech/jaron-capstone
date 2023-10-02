using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace FullStackAuth_WebAPI.Controllers
{ 
    public class SurveyController : Controller
    {
        private readonly ApplicationDbContext _context;
        public SurveyController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: SurveyController
        public IActionResult GetSurvey()
        {
            var Survey = _context.Surveys.ToArray();
            return Ok(Survey);
        }

        // GET: SurveyController/Details/5
        [HttpGet("Survey"), Authorize]
        public IActionResult GetUsersSurveys()
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string userId = User.FindFirstValue("id");


                var Survey = _context.Surveys.Where(c => c.ID.Equals(userId));


                return StatusCode(200, Survey);
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
            }
        }

        // GET: SurveyController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SurveyController/Create
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] Survey data, int surveyId)
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string SurveyId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(SurveyId))
                {
                    return Unauthorized();
                }


                data.Id = surveyId;


                _context.Surveys.Add(data);
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
