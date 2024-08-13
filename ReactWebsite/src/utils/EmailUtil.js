const url = "https://api.emailjs.com/api/v1.0/email/send";

export async function SendEmail(name, email, phone, comments) {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            service_id: "service_test_claire",
            template_id: "template_contact_request",
            user_id: "FjhaJ8A7fQVlE8ojK",
            template_params: {
                "name": name,
                "email": email,
                "phone": phone,
                "comments": comments
            }
        })
    });

    if (response.ok) {
        return true;
    } else {
        return false;
    }
}