// Only trigger on the Fetch Medical History button
const fetchBtn = document.getElementById("fetchBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const medicalData = document.getElementById("medicalData");

// ✅ OTP Flow for Fetch Button
fetchBtn.addEventListener("click", () => {
  alert("OTP sent to registered emergency contact.");
  otpSection.style.display = "block";
});

// ✅ Verify OTP
verifyOtpBtn.addEventListener("click", () => {
  if (otpInput.value === "123456") {
    alert("OTP verified!");
    medicalData.style.display = "block";
  } else {
    alert("Invalid OTP. Please try again.");
  }
});

