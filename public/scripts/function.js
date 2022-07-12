function drawerOpen() {
  menuDrawerElement.classList.toggle("open");
}

function drawerClose() {
  menuDrawerElement.classList.remove("open");
  passwordInputElement.style.display = "none";
  deleteConfirmElement.style.display = "none";
}

function memoSelect(event) {
  const target = event.currentTarget.classList;
  target.contains("selected")
    ? target.remove("selected")
    : target.add("selected");
}

function deleteInputBox() {
  passwordInputElement.style.display = "block";
  deleteConfirmElement.style.display = "block";
  cancleBtnElement.style.display="block"

  deleteBtnElement.style.display="none";
  editBtnElement.style.display="none";
}
function deleteCancle(){
  passwordInputElement.style.display = "none";
  deleteConfirmElement.style.display = "none";
  cancleBtnElement.style.display="none"

  deleteBtnElement.style.display="block";
  editBtnElement.style.display="block";
}
// function ipConcealer(ip){
//   ip.lastIndexOf('.')
// }
