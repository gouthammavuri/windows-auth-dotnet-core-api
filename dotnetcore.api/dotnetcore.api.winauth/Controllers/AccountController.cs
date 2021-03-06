﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace DotnetCore.Api.WinAuth.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        [HttpGet]
        [Route("UserName")]
        public string Get()
        {
            var httpContext = HttpContext;
            IPrincipal p = httpContext.User;
            return p.Identity.Name;
        }

        [HttpPost]
        [Route("test")]
        public string Test([FromBody]Employee employee)
        {
            var httpContext = HttpContext;
            IPrincipal p = httpContext.User;
            return p.Identity.Name;
        }
    }

    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
