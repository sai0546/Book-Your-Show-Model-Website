function submitForm() {
    // Retrieve form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var seats = document.getElementById('seats').value;

    // Display a simple alert with the entered details (you can customize this part)
    alert(`Booking Details:\nName: ${name}\nPhone Number: ${phone}\nSeats: ${seats}`);
    
    // Additional logic for further processing or sending data to a server can be added here
}
function proceedToPayment() {
    var button = document.getElementById('paymentButton');
    button.classList.toggle('clicked');
}
