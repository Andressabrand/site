
let list = document.querySelectorAll('.item')

let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let ativo = 0

prev.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')
    ativo = ativo >= count - 1 ? 0 : ativo + 1
    list[ativo].classList.add('ativo')









}

next.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

ativo = ativo <= 0 ? count -1  : ativo - 1
    list[ativo].classList.add('ativo')

}



