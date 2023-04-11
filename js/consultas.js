let form = document.querySelector('form');
let div = document.getElementsByClassName('form');
let button = document.getElementsByTagName('button');
let indicate = document.querySelector('.page-indicator');
let curPage = 0;
let emn = indicate.getElementsByTagName('em');
let val = 0; 

window.onload = createIndicator;

form.onsubmit = ()=>{
    return false;
}

function createIndicator(){
    for(let i=0; i<div.length; i++){
        const em = document.createElement('em');
        em.id = i;
        if (i == 0){
            em.className = 'one-page';
        }
        indicate.appendChild(em);
    }
}

button[1].onclick = ()=>{
    if(curPage == 0){
        validate();
    }   
    if(curPage == 1){
        validatefecha();
    }
}


button[0].onclick = ()=>{
    if (curPage > 0){
        curPage --;
    }
    if (curPage < 1){
        button[0].style.display = 'none';
    }
    if(curPage < div.length -1){
        button[1].textContent = 'Siguiente';
    }
    

    displayPage(curPage);
    activeIndicator(curPage);
}

displayPage(curPage);
function displayPage(page){
    for(let i of div){
        i.classList.remove('active');
    }
    div[page].classList.add('active');
}

function validate(){
    const activePage = document.querySelector('.active');
    const field = activePage.getElementsByClassName('field');
    let inputName = field[0].children[1];
    let inputApe = field[1].children[1];

    if (inputName.value != '' && inputApe.value != ''){
        curPage ++;
        button[0].style.display = 'block';

        if(curPage > div.length -2){
            $("#confirmar").css("display", "block"); 
        }

        if(curPage >= div.length){
            form.onsubmit = ()=>{
                return true;
            }
        }
        displayPage(curPage);
        activeIndicator(curPage);
    }
    if (inputName.value == ''){
        hide(inputName);
    }
    if (inputApe.value == ''){
        hide(inputApe);
    }
}


function validatefecha(){
    const activePage = document.querySelector('.fecha');
    const field = activePage.getElementsByClassName('field');
    let inputDate = field[0].children[1];

    if (inputDate.value != ''){
        curPage ++;
        button[0].style.display = 'block';

        if(curPage > div.length -2){
            button[0].style.display = 'none';
            $("#confirmar").css("display", "block");
        }

        if(curPage >= div.length){
            form.onsubmit = ()=>{
                return true;
            }
        }
        displayPage(curPage);
        activeIndicator(curPage);
    }
    if (inputDate.value == ''){
        hide(inputDate);
    }
}

function hide(input){
    input.nextElementSibling.textContent = "Campo Vacio";
    setTimeout(()=>{
        input.nextElementSibling.textContent ='';
    }, 2000);
}

function activeIndicator(page){
    for(let i of emn){
        i.classList.remove('one-page');
    }
    emn[page].classList.add('one-page');
}

$("#confirmar").on("click", function(){
    alert("Mi primer alert");
});