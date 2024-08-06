namespace Models.Users
{
    /// <summary>
    /// The enumeration which is used to represent a level of privilege in the applications.
    /// </summary>
    public enum Privilege
    {
        /// <summary>
        /// A regular user.
        /// </summary>
        User = 0,

        /// <summary>
        /// An administrative user.
        /// </summary>
        Admin = 1,
    }
}
