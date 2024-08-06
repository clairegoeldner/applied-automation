const url = "https://localhost:7001"

export async function GetToken(username, password) {
    const response = await fetch(url + "/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        return await response.text();
    } else {
        return false;
    }
}