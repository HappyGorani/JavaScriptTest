function drawerOpen() {
  menuDrawerElement.classList.toggle("open");
}

function drawerClose() {
  menuDrawerElement.classList.remove("open");
}

function memoSelect(event) {
  const target = event.currentTarget.classList;
  target.contains("selected")
    ? target.remove("selected")
    : target.add("selected");
}
