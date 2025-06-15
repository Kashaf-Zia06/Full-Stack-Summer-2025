const btn = document.querySelector("#log")
head = document.getElementById("heading")
sub_btn = document.querySelector("#sub")
form = document.querySelector(".login")
counter = document.querySelector(".dashboard")



btn.addEventListener('click', () => {
    const loadingDiv = document.createElement("div");
    loadingDiv.textContent = "Loading...";
    loadingDiv.id = "loading"; // ✅ assign id
    document.body.appendChild(loadingDiv);

    setTimeout(() => {
        loadingDiv.remove();  // remove loading text
        displayLogin();
    }, 2000);
});

displayLogin = () => {
    form.classList.remove("hidden");
    btn.classList.add("hidden"); // ✅ hide the login button when form is shown
}



sub_btn.addEventListener('click', () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("🚫 Please fill in both username and password.");
        return; // stop execution if either is empty
    }

    // If both fields are filled, proceed
    form.classList.add("hidden");
    btn.classList.add("hidden");
    head.classList.add("hidden");
    btn.style.display = 'none';

    dashboard(() => {
        alert("⏰ Time's up!");
    });
});


dashboard = (callback) => {
    counter.classList.remove("hidden");
    btn.classList.add("hidden");

    let hours = parseInt(prompt("How many hours?")) || 0;
    let mint = parseInt(prompt("How many minutes?")) || 0;
    let seconds = parseInt(prompt("How many seconds?")) || 0;


    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = mint.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');


    let interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else if (mint > 0) {
            mint--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            mint = 59;
            seconds = 59;
        } else {
            clearInterval(interval); // Stop when time runs out
            callback();
        }

        // Update display
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = mint.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }, 1000);


}


