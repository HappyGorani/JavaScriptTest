const drawerButtonElement = document.getElementById("menuDrawerBtn");
const menuDrawerElement = document.getElementById("menuDrawer");

const memoBoxElements = document.querySelectorAll("#memoBoxBody");

const passwordInputElement = document.getElementById("passwordInput");
const deleteConfirmElement = document.getElementById("deleteConfirm");
const deleteBtnElement = document.getElementById("deleteBtn");
const cancleBtnElement=document.getElementById("cancleBtn");
const editBtnElement=document.getElementById("editBtn");


drawerButtonElement.addEventListener("click", drawerOpen);
menuDrawerElement.addEventListener("click", drawerClose);


for (const memoBoxElement of memoBoxElements) {
  memoBoxElement.addEventListener("click", memoSelect);
}
deleteBtnElement.addEventListener("click", deleteInputBox);
cancleBtnElement.addEventListener("click", deleteCancle)