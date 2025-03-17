document.addEventListener('DOMContentLoaded', function() {
    // You would add your interaction logic here
    // For example, tracking clicks or showing additional content
    
    const instagramButton = document.querySelector('.btn-instagram');
    instagramButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would add your Instagram redirect logic
        // For demonstration, we'll just alert
        alert('Redirecting to Instagram. Follow us and DM "rahul cheat story" for the discount code!');
        // window.location.href = 'https://instagram.com/youraccount';
    });
});