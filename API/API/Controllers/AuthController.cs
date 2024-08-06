using API;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models.Users;

namespace CapsToryAPI.Controllers
{
    /// <summary>
    /// The class which is used to control authorization.
    /// </summary>
    [ApiController]
    [AllowAnonymous]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        /// <summary>
        /// The app settings.
        /// </summary>
        private readonly AppSettings _appSettings;

        /// <summary>
        /// The API users.
        /// </summary>
        private readonly List<ApiUser> _apiUsers;

        /// <summary>
        /// The website users.
        /// </summary>
        private readonly List<User> _users;

        private readonly ITokenService _tokenService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthController"/> class.
        /// </summary>
        /// <param name="appSettings">The app settings.</param>
        /// <param name="tokenService">The service to use to generate tokens.</param>
        public AuthController(AppSettings appSettings, ITokenService tokenService)
        {
            this._appSettings = appSettings;
            this._apiUsers = appSettings.ApiUsers;
            this._users = appSettings.Users;

            this._tokenService = tokenService;
        }

        /// <summary>
        /// Get a token for a user.
        /// </summary>
        /// <param name="loginRequest">The request to use to log in.</param>
        /// <returns>The token.</returns>
        /// <response code="200">Returns the new token.</response>
        /// <response code="401">If the username or password is incorrect.</response>
        [HttpPost("token")]
        [ProducesResponseType(typeof(string), 200)]
        public IActionResult GetToken([FromBody] LoginRequest loginRequest)
        {
            // The website user that is being authenticated.
            User authenticateUser = this._users
                .FirstOrDefault(user => user.Username.ToLower() == loginRequest.Username.ToLower() && this.VerifyPassword(loginRequest.Password, user.PasswordHash));

            if (authenticateUser == null)
            {
                return this.Unauthorized();
            }
            else
            {
                return this.Content(this._tokenService.GenerateToken(authenticateUser.Username));
            }
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            PasswordHasher<string> hasher = new ();
            return hasher.VerifyHashedPassword(string.Empty, storedHash, password) == PasswordVerificationResult.Success;
        }
    }
}
