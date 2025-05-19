const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const SIout = document.getElementById("simple-interest");

function calculate() {
  if (!principalInput.value || !rateInput.value || !timeInput.value) {
    alert("Please input all the values");
  } else {
    const SI =
      (parseFloat(principalInput.value) *
        parseFloat(rateInput.value) *
        parseFloat(timeInput.value)) /
      100;
    SIout.innerText = `₹ ${SI}`;
  }
}

function reset() {
  principalInput.value = "";
  rateInput.value = "";
  timeInput.value = "";
  SIout.innerText = "";
}
