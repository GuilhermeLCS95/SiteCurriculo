﻿using Guilherme.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Guilherme.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Knowledge()
        {
            return View();
        }
        public IActionResult AboutMe()
        {
            return View();
        }
        public IActionResult DevTools()
        {
            return View();
        }
        public IActionResult DownloadFile()

        {

            var memory = DownloadSinghFile("CV.pdf", "wwwroot\\MyFiles");

            return File(memory.ToArray(), "application/pdf", "CV.pdf");

        }

        private MemoryStream DownloadSinghFile(string filename, string uploadPath)

        {

            var path = Path.Combine(Directory.GetCurrentDirectory(), uploadPath, filename);

            var memory = new MemoryStream();

            if (System.IO.File.Exists(path))
            {

                var net = new System.Net.WebClient();

                var data = net.DownloadData(path);

                var content = new System.IO.MemoryStream(data);

                memory = content;

            }
            memory.Position = 0;

            return memory;
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}