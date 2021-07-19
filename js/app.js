function data(){ 
    var data = document.getElementById('data');
    var now = new Date
    data.textContent =  (`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`)
    }

function log(message){
    console.log('> ' + message)
}

const appConsole = document.querySelectorAll('.console')

appConsole.forEach(e => {
    e.addEventListener('dragstart', dragstart)
    e.addEventListener('drag', drag)
    e.addEventListener('dragend', dragend)
})

function dragstart(){
    log('drag start')
    dropzone.forEach(dropzone => dropzone.classList.add('highlight'))
}
function drag(){
    log('drag')
    
}
function dragend(){
    log('drag end')
    dropzone.forEach(dropzone => dropzone.classList.remove('highlight'))
}

const dropzone = document.querySelectorAll('.dropzone')

dropzone.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragdrop', dragdrop)
})

function dragenter(){
    log('drop zone')
}

function dragover(){
    log('drop over')
    
}

function dragleave(){
    log('drop leave')
    
}

function dragdrop(){
    log('drop dropped')

}