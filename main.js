"user strict";

console.log("konichiwa, sekai");
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojosde un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."

const kittenDesc2 ="Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."


const nekoList = document.querySelector(".js-list");
nekoList.innerHTML += `<li class="card neko1">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description kittenDesc1">
                ${kittenDesc1}
              </p>
            </article>
          </li>`;

nekoList.innerHTML += ` <li class="card neko2">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description kittenDesc2">
              ${kittenDesc2}
            </p>
          </li>`;

nekoList.innerHTML += `<li class="card neko3">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description kittenDesc3">
              ${kittenDesc3}
            </p>
          </li> `;

const jsbtnadd = document.querySelector(".js-btn-add");
jsbtnadd.addEventListener("click", (Event) => {
  const form = document.querySelector(".js-collapsed");
  form.classList.remove("collapsed");
});

const cancelButton = document.querySelector(".button-cancel");
cancelButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  const form = document.querySelector(".js-collapsed");
  form.classList.add("collapsed");
});


const searchButton = document.querySelector(".js_button-search");
const descrInput = document.querySelector(".js_in_search_desc");

const Gato1 = document.querySelector(".neko1")
const Gato2 = document.querySelector(".neko2")
const Gato3 = document.querySelector(".neko3")

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = descrInput.value;
  console.log(descrSearchText);
  Gato1.style.display = "none";
  Gato2.style.display = "none";
  Gato3.style.display = "none";
  
  if (kittenDesc1.includes(descrSearchText)) {
  Gato1.style.display = "block"
}

if (kittenDesc2.includes(descrSearchText)) {
   Gato2.style.display = "block"
}

if (kittenDesc3.includes(descrSearchText)) {
  Gato3.style.display = "block"
}
});
