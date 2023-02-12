document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('text').innerText = 'this is new text';
})

document.getElementById('btn2').addEventListener('click', function(){
    const inputText = document.getElementById('input').value;

    document.getElementById('text2').innerText = inputText;
    document.getElementById('input').value = '';
})


document.getElementById('btn-post').addEventListener('click', function(){
    const textArea = document.getElementById('text3');
    const newText = textArea.value;
    // console.log(newText);

    const sectionContainer = document.getElementById('section-container');
    const newPara = document.createElement('p');
    newPara.innerText = newText;
    sectionContainer.append(newPara);
    textArea.value = '';
})