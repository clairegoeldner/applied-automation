using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CapsToryAPI.Controllers
{
    /// <summary>
    /// The class which is used to control the API.
    /// </summary>
    [AllowAnonymous]
    [ApiController]
    [Route("")]
    public class ApiController : ControllerBase
    {
        /// <summary>
        /// The index file for the API.
        /// </summary>
        /// <returns>The index file.</returns>
        [HttpGet("")]
        public string Index()
        {
            return "The API is running.";
        }
    }
}
