///Galeria index

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 0;

//pasa de imagen en imagen atraves de los click
var manualNav = function (manual) {
    slides.forEach((slide) => {
    //remove la propiedad active de la class="slide"
    slide.classList.remove("active");

    ////remove la propiedad active de la class="btn"
        btns.forEach((btn) => {
        btn.classList.remove("active");
        });
    });

  //vuelve a agregar la class="active" al slide y al btn, mientra que los demas quedan desactivados
    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
};

//es un controlador para el evento "click" a cada botón. Cuando se hace clic en un botón, se llama a la función "manualNav" con el índice del botón como parámetro. El código también define una función llamada "repeat" que se utiliza para cambiar automáticamente las diapositivas después de un cierto intervalo de tiempo
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        console.log(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;

var repeater = () => {
    setTimeout(function () {
        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove("active");
        });

        slides[i].classList.add("active");
        btns[i].classList.add("active");
        i++;

        if (slides.length == i) {
            i = 0;
        }
        if (i >= slides.length) {
            return;
        }
        repeater();
        }, 30000);
    };
    repeater();
};
repeat();
