// Get all payment option elements
const paymentOptions = document.querySelectorAll('.payment-option');

// Add event listeners for hover effects
paymentOptions.forEach((option) => {
    option.addEventListener('mouseover', function() {
        // Increase the size of the icon on hover
        this.querySelector('img').style.transform = 'scale(1.2)';
    });

    option.addEventListener('mouseout', function() {
        // Reset the size of the icon when not hovered
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// Add event listener for processing payment button
document.getElementById('process-payment-btn').addEventListener('click', function() {
    alert('Payment processed successfully!');
    // You can add more logic here for actual 
