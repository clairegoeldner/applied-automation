namespace Models.Users
{
    /// <summary>
    /// The class which is used to represent a request to log in.
    /// </summary>
    public class LoginRequest
    {
        /// <summary>
        /// Gets or sets the password to use to log in.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets the username to log in for.
        /// </summary>
        public string Username { get; set; }
    }
}
