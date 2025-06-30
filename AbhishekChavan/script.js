const sosBtn = document.getElementById("fetchBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const medicalData = document.getElementById("medicalData");

// Simulate sending OTP
sosBtn.addEventListener("click", () => {
  // In production: Send OTP using Twilio/API to family member
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

