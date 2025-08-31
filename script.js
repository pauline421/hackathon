document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real form submission

    // Optional: Clear form
    form.reset();

    // Create success message
    const successMessage = document.createElement("p");
    successMessage.textContent = "✅ Feedback submitted successfully!";
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";
    successMessage.style.marginTop = "10px";

    // Remove any existing success message
    const existingMsg = form.querySelector(".success-message");
    if (existingMsg) existingMsg.remove();

    // Add success message
    successMessage.classList.add("success-message");
    form.appendChild(successMessage);
  });
});
