namespace API
{
    using Models.Users;

    /// <summary>
    /// The class which is used to hold app settings.
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// Gets or sets the signing key.
        /// </summary>
        public string JwtSigningKey { get; set; }

        /// <summary>
        /// Gets or sets the list of API users.
        /// </summary>
        public List<ApiUser> ApiUsers { get; set; } = new List<ApiUser>();

        /// <summary>
        /// Gets or sets the list of app users.
        /// </summary>
        public List<User> Users { get; set; } = new List<User>();
    }
}
