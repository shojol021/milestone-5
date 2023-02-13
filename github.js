document.getElementById('text1').addEventListener('keyup', function (event) {
    let text1 = event.target.value;
    text1 = text1.toLowerCase();
    if (text1 === 'delete') {
        document.getElementById('btn-delete').removeAttribute('disabled');
    }
    else {
        document.getElementById('btn-delete').setAttribute('disabled', true);
    }
})

document.getElementById('btn-delete').addEventListener('click', function () {
    document.getElementById('sample').style.display = 'none';
    text1.value = '';
})

document.getElementById('btn-delete').addEventListener('click', function () {
    document.getElementById('btn-redo').removeAttribute('disabled');
    document.getElementById('btn-delete').setAttribute('disabled', true);
})

document.getElementById('btn-redo').addEventListener('click', function () {
    const abc = document.getElementById('sample');
    abc.style.display = null;
    document.getElementById('btn-redo').setAttribute('disabled', true);
})

// =================================================


document.getElementById('items').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})
// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('inputText').addEventListener('keyup', function (event) {
    input = event.target.value;
   
})

document.getElementById('btn-add').addEventListener('click', function(){
    const ul = document.getElementById('items');
    const newLi = document.createElement('li');
    newLi.innerText = input;
    newLi.classList.add('item');
    ul.append(newLi);
    const input2 = input;
    inputText.value = '';
})