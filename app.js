// Initialize EmailJS with your user ID (replace with your actual user ID)
emailjs.init(5RkuENYfsciXC_OxN); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the loading spinner
    document.getElementById('loading').style.display = 'flex';

    // Create an object to hold form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email_id').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email using emailjs
    emailjs.send('service_28nhc7s', 'template_rennl1d', {
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
    })
    .then(response => {
        document.getElementById('loading').style.display = 'none'; // Hide loading spinner
        console.log('Message sent successfully:', response);
        alert('Message sent successfully!');
    })
    .catch(error => {
        document.getElementById('loading').style.display = 'none'; // Hide loading spinner
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
    });
}
