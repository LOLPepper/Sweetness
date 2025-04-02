window.onload = () => {
    fetch("http://localhost:5000/api/message")  // Example fetch (no change needed)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("message").textContent = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    // Handle the form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();  // Prevent default form submission

        const formData = new FormData(contactForm);
        const formObj = {};
        formData.forEach((value, key) => {
            formObj[key] = value;  // Create an object with key-value pairs of the form data
        });

        // Send form data to the backend
        fetch("http://localhost:5000/submit_form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formObj),  // Convert the form data object to JSON
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);  // Show the message returned from the server
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
};

