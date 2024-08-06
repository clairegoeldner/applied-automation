using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;
using Models.Users;

namespace API.Services
{
    /// <summary>
    /// The class which is used to create tokens.
    /// </summary>
    public class TokenService : ITokenService
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

        /// <summary>
        /// Initializes a new instance of the <see cref="TokenService"/> class.
        /// </summary>
        /// <param name="appSettings">The app settings.</param>
        public TokenService(AppSettings appSettings)
        {
            this._appSettings = appSettings;
            this._apiUsers = appSettings.ApiUsers;
            this._users = appSettings.Users;
        }

        /// <summary>
        /// Generate a token for the specified user.
        /// </summary>
        /// <param name="username">The username to generate a token for.</param>
        /// <returns>The generated token.</returns>
        public string GenerateToken(string username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(this._appSettings.JwtSigningKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                        new Claim(ClaimTypes.Name, username),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
