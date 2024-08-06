namespace Models.Users
{
    /// <summary>
    /// The class which is used to represent an API user.
    /// </summary>
    public class ApiUser
    {
        /// <summary>
        /// Gets or sets the user's hashed password.
        /// </summary>
        public string PasswordHash { get; set; }

        /// <summary>
        /// Gets or sets the username.
        /// </summary>
        public string Username { get; set; }
    }
}
