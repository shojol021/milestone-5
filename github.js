document.getElementById('text1').addEventListener('keyup', function(event){
    let text1 =  event.target.value;
    text1 = text1.toLowerCase();
    if(text1 === 'delete'){
        document.getElementById('btn-delete').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-delete').setAttribute('disabled', true);
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    document.getElementById('sample').style.display = 'none';
    text1.value = '';
})

document.getElementById('btn-delete').addEventListener('click', function(){
    document.getElementById('btn-redo').removeAttribute('disabled');
    document.getElementById('btn-delete').setAttribute('disabled', true);
})

document.getElementById('btn-redo').addEventListener('click', function(){
    const abc = document.getElementById('sample');
    abc.style.display = null;
    document.getElementById('btn-redo').setAttribute('disabled', true);
})