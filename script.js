const cBox = document.querySelector("#checkbox");

cBox.addEventListener("change", () => {
  if (checkbox.checked) {
    console.log("✅ Checkbox is checked");
  } else {
    console.log("❌ Checkbox is unchecked");
  }
});