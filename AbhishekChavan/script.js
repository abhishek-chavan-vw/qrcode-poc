const fetchBtn = document.getElementById("fetchBtn"); // changed from sosBtn
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const medicalData = document.getElementById("medicalData");

// Trigger OTP flow from Fetch button
fetchBtn.addEventListener("click", () => {
  // In production: Send OTP using API to emergency contact
  alert("OTP sent to registered emergency contact.");
  otpSection.style.display = "block";
});

// Simulated OTP verification
verifyOtpBtn.addEventListener("click", () => {
  if (otpInput.value === "123456") {
    alert("OTP verified!");
    medicalData.style.display = "block";
  } else {
    alert("Invalid OTP. Please try again.");
  }
});
