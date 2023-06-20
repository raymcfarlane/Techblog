$(".login-form").on("submit", async (e) => {

    try {

        e.preventDefault();

        console.log("Submit form button was hit!");
    
        const loginData = {
            email: $("#email-login").val(),
            password: $("#password-login").val()
        };
    
        const response = await fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const responseData = await response.json()
        console.log(responseData);
    
        if(responseData.success) {
            console.log("You are successfully logged in!");
        }

    } catch (err) {
        console.log(err)
    }
});