let createTaskButton = document.querySelector('button')
let closeModalButton = document.querySelector('.closeModal')

console.log({})
createTaskButton.addEventListener('click', createTask)

function createTask() {
    let modal = document.querySelector('.modal');
    console.log(modal)
    modal.style.opacity = '1';

    closeModalButton.addEventListener('click', closeModal)
}
function closeModal(e) {
    let modal = document.querySelector('.modal');
    let elem = document.querySelector('.input')
    console.log(elem.value)

    let info = {
        title: elem.value,
        description: elem.value,
        color: elem.value,
        priority: elem.value,
    }
    console.log(info)
    console.log(info.color)
    console.log(info.description)
    modal.style.opacity = '0';
}
