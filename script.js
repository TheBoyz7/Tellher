document.addEventListener("DOMContentLoaded", function () {
    const lunchYesButton = document.getElementById("lunchYes");
    const lunchNoButton = document.getElementById("lunchNo");

    lunchYesButton.addEventListener("click", () => {
        // If Bukky clicks "Yes"
        alert("Great! Looking forward to it. I'll message you to plan the details.");
    });

    lunchNoButton.addEventListener("click", () => {
        // If Bukky clicks "No"
        alert("So how was that? you think this can be the next checkbox (elementary school way of asking agirl out) {this wasn't real by the way, except the last part}.");
    });
});
