function data(){ 
    var data = document.getElementById('data');
    var now = new Date
    data.textContent =  (`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`)
    }

function log(message){
    console.log('> ' + message)
}

const appConsole = document.querySelectorAll('.console')
const appBrowser = document.querySelectorAll('.browser')
const appFile = document.querySelectorAll('.file')

appConsole.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

appBrowser.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

appFile.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

function dragstart(){
    dropzone.forEach(dropzone => dropzone.classList.add('highlight'))
    // this é o card nessa situacao

    this.classList.add('is-dragging')

}
function drag(){
    
}
function dragend(){
    dropzone.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

const dropzone = document.querySelectorAll('.dropzone')
const dropzones = document.querySelectorAll('.dropzone')

dropzone.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragdrop', dragdrop)
})

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragdrop', dragdrop)
})

function dragenter(){
    log('ola')
}

function dragover(){
    this.classList.add('over')

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
    
}

function dragleave(){
    this.classList.remove('over')    
}

function dragdrop(){
    // this.style.animation='toggle 0.7s linear'

}

function toggleConsole(){
    const actionConsole = document.querySelectorAll('.console')
    actionConsole.forEach(e => {
        e.classList.toggle('consolef')
    })
}

function toggleBrowser(){
    const actionBrowser = document.querySelectorAll('.browser')
    actionBrowser.forEach(e => {
        e.classList.toggle('browserf')
        // e.classList.add('browser')
    })
}

function toggleFile(){
    const actionFiles = document.querySelectorAll('.file')    
    actionFiles.forEach(e => {
        e.classList.toggle('filef')
    })
}

function maxFile(){

    const dropzone = document.querySelectorAll('.dropzone')
    dropzone.forEach(e=>{
        e.classList.toggle('dropzoneg')
    })

    const actionFiles = document.querySelectorAll('.filef')   
    for (let i = 0; i < actionFiles.length; i++){
        actionFiles[0].classList.toggle('fileg')
    }
}

function maxBrowser(){  

    const dropzone = document.querySelectorAll('.dropzone')
    dropzone.forEach(e=>{
        e.classList.toggle('dropzoneg')
        log(this)
    }) 

    const actionBrowser = document.querySelectorAll('.browserf')
    for (let i = 0; i < actionBrowser.length; i++){
        actionBrowser[0].classList.toggle('browserg')
    }
}

function maxConsole(){
    const dropzone = document.querySelectorAll('.dropzone')
    dropzone.forEach(e=>{
        e.classList.toggle('dropzoneg')
    })
    const actionConsole = document.querySelectorAll('.consolef')
    for (let i = 0; i < actionConsole.length; i++){
        actionConsole[0].classList.toggle('consoleg')
    }
}