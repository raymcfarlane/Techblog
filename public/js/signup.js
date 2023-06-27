const nameSignup = $("#name-signup");
const emailSignup = $("#email-signup");
const passwordSignup = $("#password-signup");

$(".signup-form").on("submit", async (e) => {
    e.preventDefault();

    try {

        const signupData = {
            name: nameSignup.val(),
            email: emailSignup.val(),
            password: passwordSignup.val()
        };
    
        console.log("Signup Data sent by user:")
        console.log(signupData);
    
        const response = await fetch('/api/users/signup', {
            method: "POST",
            body: JSON.stringify(signupData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = await response.json();
        console.log("Response Data:----------------------------------",responseData);

        if(responseData.success) {
            console.log("You are now signed in and being redirected to your dashboard where you can create your own blogposts!");
            window.location.replace('/dashboard');
        } else {
            console.log("Something went wrong! Try again!")
        }

    } catch (err) {
        console.log(err)
    }
});