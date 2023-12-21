// script.js
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const cartList = document.getElementById("cart-list");
const cartTotalElement = document.getElementById("cart-total");

let ticketPrice = +movieSelect.value; // Initialize ticketPrice

// Function to update the amount payable
function updateAmount() {
    const selectedSeatsCount = document.querySelectorAll(".row .seat.selected").length;
    const seatPrice = +total.innerText / selectedSeatsCount;

    // Clear previous cart items
    cartList.innerHTML = "";

    // Add selected seats to the cart
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    selectedSeats.forEach((seat, index) => {
        const seatNumber = seat.innerText;
        const listItem = document.createElement("li");
        listItem.innerText = `Seat ${seatNumber}`;
        cartList.appendChild(listItem);
    });

    // Calculate and update the total amount in the cart
    const cartTotal = selectedSeatsCount * seatPrice;
    cartTotalElement.innerText = cartTotal;
}

// Function to save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Function to update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice; // Use ticketPrice here

    setMovieData(movieSelect.selectedIndex, movieSelect.value);

    // Call the updateAmount function to update the cart
    updateAmount();
}

// Get data from local storage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        ticketPrice = +movieSelect.value; // Update ticketPrice when loading from localStorage
    }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
    ) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();

// Process payment function
function processPayment() {
    const cartTotal = +cartTotalElement.innerText;
    alert("Payment processed successfully! Total Amount: RS. " + cartTotal);
}

// You can add more functions or modify existing ones as needed

