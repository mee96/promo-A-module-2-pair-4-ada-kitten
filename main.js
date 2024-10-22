"user strict";

console.log("konichiwa, sekai");
/* Comentamos por que en el ejercicio del dia 22/10 cambiamos el formato
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojosde un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenDesc2 =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";



const kittenImg1 = "https://dev.adalab.es/gato-siames.webp";
const kittenImg2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenImg3 = "https://dev.adalab.es/maine-coon-cat.webp";

const kittenName1 = "Anastasio".toUpperCase();
const kittenName2 = "Fiona".toUpperCase();
const kittenName3 = "Cielo".toUpperCase();

const kittenRace1 = "Siamés";
const kittenRace2 = "Sphynx";
const kittenRace3 = "Maine Coon";
*/

const kittenData_1 = {
  kittenImg1: 'https://dev.adalab.es/gato-siames.webp',
  kittenName1: 'Anastacio',
  kittenDesc1: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  kittenRace1: 'Siamés',
};

const kittenData_2 = {
  kittenImg2: "https://dev.adalab.es/sphynx-gato.webp",
  kittenName2: "Fiona",
  kittenDesc2: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  kittenRace2: "Sphynx",
};
const kittenData_3 = {
  kittenImg3: "https://dev.adalab.es/maine-coon-cat.webp",
  kittenName3: "Cielo",
  kittenDesc3: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  kittenRace3: "Maine Coon",
};
const nekoList = document.querySelector(".js-list");
nekoList.innerHTML += `<li class="card neko1">
            <article>
              <img
                class="card_img"
                src= ${kittenData_1.kittenImg1}
                alt="siames-cat"
              />
              <h3 class="card_title">${kittenData_1.kittenName1}</h3>
              <h4 class="card_race">${kittenData_1.kittenRace1}</h4>
              <p class="card_description kittenDesc1">
                ${kittenData_1.kittenDesc1}
              </p>
            </article>
          </li>`;

nekoList.innerHTML += ` <li class="card neko2">
            <img
              class="card_img"
              src= ${kittenData_2.kittenImg2}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenData_2.kittenName2}</h3>
            <h4 class="card_race">${kittenData_2.kittenRace2}</h4>
            <p class="card_description kittenDesc2">
              ${kittenData_2.kittenDesc2}
            </p>
          </li>`;

nekoList.innerHTML += `<li class="card neko3">
            <img
              class="card_img"
              src=${kittenData_3.kittenImg3}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenData_3.kittenName3}</h3>
            <h4 class="card_race">${kittenData_3.kittenRace3}</h4>
            <p class="card_description kittenDesc3">
              ${kittenData_3.kittenDesc3}
            </p>
          </li> `;

         


/*Ejercicio anterior, lo qutiamos porque usamos funciones
const jsbtnadd = document.querySelector(".js-btn-add");
jsbtnadd.addEventListener("click", (Event) => {
  const form = document.querySelector(".js-collapsed");
  form.classList.remove("collapsed");
});
cons

/*const cancelButton = document.querySelector(".button-cancel");
cancelButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  const form = document.querySelector(".js-collapsed");
  form.classList.add("collapsed");
});*/

/* 
Funcion para abrir en el boton de +:
-hacer click
-que se abra
*/
const jsbtnadd = document.querySelector(".js-btn-add");
const newForm =document.querySelector(".js-collapsed");

function showNewCatForm( ) {
  newForm.classList.remove('collapsed');
  console.log("apretar boton");
};

 jsbtnadd.addEventListener("click", showNewCatForm);


 
const cancelButton = document.querySelector(".button-cancel");
function hideNewCatForm() {
  newForm.classList.add('collapsed');
  console.log("apretar boton-cancelar"); 
}
cancelButton.addEventListener("click", hideNewCatForm);

/* Funcion para añadir un nuevo michi:
  -hacer click en añadir
  -

*/

const buttonAdd = document.querySelector(".js-btn-newcat");
function addNewKitten(event) {
  console.log("Apretar añadir nuevo gato")
}
buttonAdd.addEventListener("click", addNewKitten);

const Gato1 = document.querySelector(".neko1");
const Gato2 = document.querySelector(".neko2");
const Gato3 = document.querySelector(".neko3");

const searchButton = document.querySelector(".js_button-search");
const descrInput = document.querySelector(".js_in_search_desc");

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault(ev);
  const descrSearchText = descrInput.value;
  console.log(descrSearchText);
  Gato1.classList.add("collapsed");
  Gato2.classList.add("collapsed");
  Gato3.classList.add("collapsed");

  if (kittenData_1.kittenDesc1.includes(descrSearchText)) {
    Gato1.classList.remove("collapsed");
  }

  if (kittenData_2.kittenDesc2.includes(descrSearchText)) {
    Gato2.classList.remove("collapsed");
  }

  if (kittenData_3.kittenDesc3.includes(descrSearchText)) {
    Gato3.classList.remove("collapsed");
  }
});


/* ejercicio 3 dia 18/10 funciones I*/

const newurl = document.querySelector(".js-newurl");
const newname = document.querySelector(".js-newname");
const newrace = document.querySelector(".js-newrace");
const newdescrip = document.querySelector(".js-newdescrip");


