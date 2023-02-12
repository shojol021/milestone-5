// const sections = document.getElementsByTagName('section');
// for(const section of sections){
//     section.style.border = '2px solid steelblue';
// }

// document.getElementById('ul2').style.backgroundColor = 'yellow';

const setColor = document.getElementsByClassName('ul2class');
setColor[0].classList.add('bgcolor');

const setColor3 = document.getElementsByTagName('h1');
for(let i=0; i<setColor3.length; i++){
    setColor3[i].classList.add('bgcolor');
}

document.getElementById('li-countries').classList.remove('bgcolor');


// ======new li create ========
const newUl = document.querySelectorAll('.section1 ul');
const newLi = document.createElement('li');
newLi.innerText = 'new li created';
newUl[0].append(newLi);

// ======color onclick============
function makeRed(){
    document.getElementById('sectionId1').style.backgroundColor = 'red';
}

const blueBtn = document.getElementById('btn-blue');
blueBtn.onclick = makeBlue;

function makeBlue(){
    document.getElementById('sectionId1').style.backgroundColor = 'blue';
}

const purpleBtn = document.getElementById('btn-purple');
purpleBtn.onclick = function makePurple(){
    document.getElementById('sectionId1').style.backgroundColor = 'purple';
}

const pinkBtn = document.getElementById('btn-pink');
pinkBtn.addEventListener('click', makePink);
function makePink(){
    document.getElementById('sectionId1').style.backgroundColor = 'pink';
}

document.getElementById('btn-goldenrod').addEventListener('click', function(){
    document.getElementById('sectionId1').style.backgroundColor = 'goldenrod';
})