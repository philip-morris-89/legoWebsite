let apiDummy=[
  [ //Random
    {
        link: "https://www.lego.com/cdn/cs/set/assets/blt10c72e2ab2785ea4/10306.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
        title: "Atari 2600",
        price: "239,99 €",
        details: "Novità",
        star: "4"
    },
    {
        link: "https://www.lego.com/cdn/cs/set/assets/blt36fb03cdeb25ad1a/10302.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
        title: "Optimus Prime",
        price: "179,99 €",
        details: "Novità",
        star: "3"
    },
    {
        link: "https://www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
        title: "Castello dei cavalieri del leone",
        price: "399,99 €",
        details: "Difficile da trovare",
        star: "3.5"
    },
    {
        link: "https://www.lego.com/cdn/cs/set/assets/blt15246c4306d1f236/76161.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
        title: "Batwing",
        price: "199,99 €",
        details: "Novità",
        star: "5"
    },
    {
        link: "https://www.lego.com/cdn/cs/set/assets/blt6007d8f29092bb5f/75340_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
        title: "Calendario dell'avvento di Star Wars",
        price: "34,99 €",
        details: "Esclusivo",
        star: "2"
    }
],[ //Marvel
  {
    link: "https://www.lego.com/cdn/cs/set/assets/blt094ad51f69e44f8f/76223.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    name: "Guanto dell'Infinito di Iron Man",
    price: "69,99 €",
    details: "Esclusivo",
    star: "4.5"
 },
 {
  link: "https://www.lego.com/cdn/cs/set/assets/bltd22f99034387c7ac/76209.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Martello di Thor",
  price: "119,99",
  details: "Novità",
  star: "4"
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blt5157080434f0c032/76218.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Sancta Santorum",
  price: "249,99",
  details: "Esaurito",
  star: "5"
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blte9c486327506d9fb/76210.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Hulkbuster",
  price: "489,99",
  details: "Novità",
  star: ""
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blt786d9a5e1bafd414/76217.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Io Sono Groot",
  price: "52,99",
  details: "Novità",
  star: "3.5"
},
],[ //StarWars
  {
    link: "https://www.lego.com/cdn/cs/set/assets/bltdbe9230cce3804cf/75331.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    name: "Razor Crest",
    price: "599,99",
    details: "Difficile da trovare",
    star: "5"
 },
 {
  link: "https://www.lego.com/cdn/cs/set/assets/blt95c35d4ed5665a49/75192.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Millennium Falcon",
  price: "899,99",
  details: "Il più veloce",
  star: "5"
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blt934044fa508776e2/75252.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Imperial Star Destroyer",
  price: "699,99",
  details: "Presto fuori catalogo",
  star: "5"
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blt4be686c9aaced5fa/40547.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Obi-Wan Kenobi e Darth Vader",
  price: "19,99",
  details: "Offerta",
  star: "3"
},
{
  link: "https://www.lego.com/cdn/cs/set/assets/blt6007d8f29092bb5f/75340_alt1.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  name: "Calendario dell'Avvento Lego",
  price: "39,99",
  details: "Natale",
  star: "4"
},
],[
  
]];

// {
//    link: "",
//    name: "",
//    price: "",
//    details: "",
//    star: ""
// },

let data = apiDummy[Math.floor(Math.random()*myArray.length)];

function injectCard(){
  //cardPlace per individuare dove piazzare il contenuto
    const cardPlace = document.querySelector("#cardPlace");
    console.log(cardPlace);
    //forEach cicla gli elementi creando una card per ogni object dell'array
    data.forEach(element => {
      //in mezzo ai backtick `` va inserito l'HTML della card
        cardPlace.insertAdjacentHTML("beforeend",`
        <li class="slider-li">
            <!--CARD INIZIO-->
            <div class="productCard" data-card="template1" data-skeleton="false">
              <div class="productCard-display">
                <!-- Add To Wishlist Component  -->
                <details class="addToWishlist">
                  <summary>
                    <svg class="heart" width="100%" height="100%" viewBox="0 0 40 40" alt="">
                      <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                      <path class="path1"
                        d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126"
                        fill="#006DB7"></path>
                      <path class="path2"
                        d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126"
                        fill="#006DB7"></path>
                    </svg>
                    <p class="heartButton-textContainer">Aggiungi alla lista dei desideri</p>
                    <svg class="arrow" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                    </svg>
                    <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                      aria-hidden="true">
                      <path
                        d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
                        fill="currentColor" fill-rule="evenodd"></path>
                    </svg>
                  </summary>
                  <form>
                    <ul>
                      <li>
                        <input type="checkbox" checked id="generale" name="generale" value="generale">
                        <a href="">Generale (1)</a>
                      </li>
                      <li>
                        <input type="checkbox" id="generale" name="generale" value="generale">
                        <a href="">Regali natale</a>
                      </li>
                    </ul>
                  </form>
                  <a class="createNewWishlist" href="">+ Crea una lista dei desideri</a>
                </details>
                <div class="addToWishlistOverlay"></div><!-- End of Add To Wishlist  -->
                <div class="productCard-badges">
                  <div class="productCard-badge"><span id="detail-span">${element.details}</span></div> 
                </div>
                <a class="productCard-imgContainer" href="">
                  <img
                    src="${element.link}"
                    alt="Lego Building">
                </a>
              </div>
              <div class="productCard-content">
                <a href="" class="productCard-title">${element.name}</a>
                <div class="productCard-ratings">
                  <!-- Component Star Ratings -->
                  <div class="starRatings" data-rating="star-${element.star}">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 250 50">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path class="cls-1"
                          d="M200,0H0V50H250V0h-50ZM39.83,47.83l-14.83-7.8-14.83,7.8,2.83-16.52L1,19.61l16.58-2.41L25,2.17l7.42,15.03,16.58,2.41-12,11.7,2.83,16.52Zm50,0l-14.83-7.8-14.83,7.8,2.83-16.52-12-11.7,16.58-2.41,7.42-15.03,7.42,15.03,16.58,2.41-12,11.7,2.83,16.52Zm50,0l-14.83-7.8-14.83,7.8,2.83-16.52-12-11.7,16.58-2.41,7.42-15.03,7.42,15.03,16.58,2.41-12,11.7,2.83,16.52Zm50,0l-14.83-7.8-14.83,7.8,2.83-16.52-12-11.7,16.58-2.41,7.42-15.03,7.42,15.03,16.58,2.41-12,11.7,2.83,16.52Zm50,0l-14.83-7.8-14.83,7.8,2.83-16.52-12-11.7,16.58-2.41,7.42-15.03,7.42,15.03,16.58,2.41-12,11.7,2.83,16.52Z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <h6 class="productCard-price">${element.price}</h6>
                <div class="productCard-button">
                  <!-- Component Add to cart button -->
                  <button class="buttonATC" data-size="large" data-theme="orange">Aggiungi al Carrello</button>
                </div>
              </div>
            </div><!-- Product Card -->
          </li>
        `);
    });

}
//listener per l'evento, load aspetta che la pagina sia tutta caricata e poi esegue la funzione injectCard
document.addEventListener("load",injectCard());

