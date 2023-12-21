document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'movie-card'
    var movieCards = document.querySelectorAll('.movie-card');

    // Add a click event listener to each movie card
    movieCards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Get the movie name from the clicked card
            var movieName = card.querySelector('h2').textContent;

            // Redirect to the movie selection page with the movie name as a query parameter
            window.location.href = 'index1.html?movie=' + encodeURIComponent(movieName);
        });
    });
});
