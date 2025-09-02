const cBox = document.querySelector("#checkbox");
const ulTag = document.querySelector("ul");
const addBtn = document.querySelector("#btn");
let inpText = document.querySelector("#inputBox");
const liTag = document.createElement("li");



addBtn.addEventListener('click', () => {

  let inpValue = inpText.value;
  if (inpValue === "") {
    alert("Please Enter a Task");
  }
  else {
    let pTag = document.createElement("p");
    pTag.innerHTML = `
    
    <input type="checkbox" id="checkbox">
    <span id="flex2">${inpValue} </span>
    <span class="editbtn">edit</span>
    <span class="delBtn">delete</span>
    
    `;
    liTag.appendChild(pTag);
    ulTag.appendChild(liTag);
  }
  inpText.value = "";
})

liTag.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    e.target.parentElement.remove();
  }


  if (e.target.classList.contains("editbtn")) {

  }

})






cBox.addEventListener("change", () => {
  if (checkbox.checked) {
    spanTag.style.textDecoration = "line-through";
  } else {
    console.log("❌ Checkbox is unchecked");
  }
});









