const drawerButtonElement = document.getElementById('menuDrawerBtn')
const menuDrawerElement = document.getElementById('menuDrawer')

const memoBoxElements = document.querySelectorAll('#memoBoxBody')
drawerButtonElement.addEventListener('click', drawerOpen)
menuDrawerElement.addEventListener('click', drawerClose)

for (const memoBoxElement of memoBoxElements) {
    memoBoxElement.addEventListener('click', memoSelect)
}
