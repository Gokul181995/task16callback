document.addEventListener("DOMContentLoaded", function () {
  // Initialize the countdown
  startCountdown(function () {
    // Callback after countdown
    displayMessage("Happy Independence Day");
  });
});

function startCountdown(callback) {
  countdown(10, function () {
    countdown(9, function () {
      countdown(8, function () {
        countdown(7, function () {
          countdown(6, function () {
            countdown(5, function () {
              countdown(4, function () {
                countdown(3, function () {
                  countdown(2, function () {
                    countdown(1, callback);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function countdown(number, callback) {
  document.getElementById("countdown").textContent = number;
  setTimeout(callback, 1000);
}

function displayMessage(message) {
  document.getElementById("countdown").textContent = message;
}
