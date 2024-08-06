namespace Models.Users
{
    /// <summary>
    /// The class which is used to represent a web app user.
    /// </summary>
    public class User
    {
        /// <summary>
        /// Gets or sets the user's hashed password.
        /// </summary>
        public string PasswordHash { get; set; }

        /// <summary>
        /// Gets or sets the username.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets the privilege level of the user.
        /// </summary>
        public Privilege Privilege { get; set; } = Privilege.User;
    }
}
