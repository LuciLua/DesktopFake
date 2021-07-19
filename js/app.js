function data(){ 
    var data = document.getElementById('data');
    var now = new Date
    data.textContent =  (`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`)
    console.log('data.textContent')
    }