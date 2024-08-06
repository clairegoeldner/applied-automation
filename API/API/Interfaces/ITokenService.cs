namespace API.Interfaces
{
    /// <summary>
    /// The interface which is used to create tokens.
    /// </summary>
    public interface ITokenService
    {
        /// <summary>
        /// Generate a token for the specified user.
        /// </summary>
        /// <param name="username">The username to generate a token for.</param>
        /// <returns>The generated token.</returns>
        string GenerateToken(string username);
    }
}