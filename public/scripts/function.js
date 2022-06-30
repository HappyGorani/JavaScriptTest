function drawerOpen() {
    menuDrawerElement.classList.toggle('open')
}

function drawerClose() {
    menuDrawerElement.classList.remove('open')
}

function memoSelect(event) {
    const target = event.currentTarget.classList
    if (target !== 'selected') {
        target.add('selected')
    } else if (target == 'selected') {
        target.remove('selected')
    }


}
