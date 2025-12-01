//SQUARES
const sqOne = document.getElementById('one');

//CHOOSE ICON FUNCTIONALITY
const xBtn = document.getElementById('x');
const oBtn = document.getElementById('o');

function chooseIcon(xOrO){
    let selectedIcon = xOrO;
    if(xOrO==='X'{
        document.getElementById('choseX').style.display = 'block';
    } else{
        document.getElementById('choseO').style.display = 'block';
    }
}

xBtn.addEventListener('click', chooseIcon('X'));
oBtn.addEventListener('click', chooseIcon('O'));


//CHANGING SQUARE TO ICON
const changeIcon = (square, icon) =>{
    let spot = square.firstElementChild;
    spot.innerHtml = icon;
}

sqOne.addEventListener('click', changeIcon(sqOne, selectedIcon))