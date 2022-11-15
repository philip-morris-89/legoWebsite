let themeCall = [
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/bltb7608fce3c4e9282/architecture_logo_pos_100h.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt4358b3e85c8e2f41/Architecture-AllThemes-202206-Theme-Preview.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "Architecture",
    testo:
      "Esplora il mondo senza uscire di casa. I set LEGO® Architecture offrono ai costruttori la possibilità di ricreare monumenti mozzafiato, skyline di città iconiche e famosi edifici storici. Questi incredibili set sono un regalo meraviglioso per chiunque sia interessato ai viaggi, alla storia e al design.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/bltda662a4115d37b1e/darkKnight-logo-300w.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt9f63553a9abcd404/ThemeImage-202201-Batman.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "Batman™",
    testo:
      "Unisciti al Giustiziere mascherato per difendere Gotham City™ dai criminali con modelli divertenti e di grande impatto. Dalla classica serie TV ai film pieni di azione, c'è un set LEGO® Batman™ per i bambini e gli adulti di tutte le età. Riproduci scene emozionanti o costruisci veicoli dettagliatissimi per la lotta al crimine.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/bltc56480b396f7f12a/boost_logo_pos_300w.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/bltfaab26fbb2b1f308/ThemeImage-202107-Boost.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "BOOST",
    testo:
      "Con LEGO® BOOST i ragazzi possono creare modelli con motori e sensori, quindi dare vita alle loro creazioni con semplici comandi di codice basati su icone.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/blt117f545a76e30723/brickheadz_logo_pos_300w.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt8159600e72a93537/Brickheadz-202208-Theme-Preview.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "BrickHeadz",
    testo:
      "I set LEGO® BrickHeadz™ sono personaggi collezionabili che puoi costruire ed esporre per aggiungere un tocco di personalità alla tua casa o al tuo spazio personale. Questi personaggi in mattoncini includono adorabili animali, cartoni animati, personaggi televisivi e cinematografici amati dai fan e pezzi speciali a tema natalizio.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/blt3e3e1c9f75798390/brickSketches-logo-pos_100h.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt5427b33e1cd44544/Brick-Sketches-AllThemes-202204-Theme-Preview.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "Brick Sketches™",
    testo:
      "Crea la tua opera d'arte costruibile con i set LEGO® Brick Sketches™ da esporre. Con illustrazioni 3D di personaggi iconici, queste opere d'arte LEGO® aggiungono colore e allegria alla stanza di ogni bambino.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/blt6e91a425cec33c6b/city_logo_pos_300w.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt1730692adfc1437f/ThemeImage-202201-City.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "City",
    testo:
      "LEGO® City offre una vivace scena metropolitana, con set pieni di veicoli realistici, edifici e tantissimi personaggi divertenti. I giovani appassionati di mattoncini possono costruire servizi di emergenza come polizia e vigili del fuoco, treni, centri commerciali e altro ancora. Stimola la creatività dei bambini e incoraggiali a costruire la propria città unica.",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/bltf466b935ec0e8c92/classic_logo_pos_100h.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/bltd08fb3a2b6eaed18/ThemeImage-202107-Classic.jpg?fit=bounds&format=webply&quality=80&width=420&height=200&dpr=1.5",
    nome: "Classic",
    testo:
      "Con LEGO® Classic i bambini potranno scoprire le proprie capacità creative. E poiché questi set abbracciano tanti gruppi di età, c'è divertimento per tutta la famiglia!",
  },
  {
    logo: "https://www.lego.com/cdn/cs/set/assets/blt19ded43a8a1cedda/creator3in1_logo_pos_300w.png?format=png&height=35&dpr=1.5",
    sfondo:
      "https://www.lego.com/cdn/cs/set/assets/blt19ded43a8a1cedda/creator3in1_logo_pos_300w.png?format=png&height=35&dpr=1.5",
    nome: "Creator 3-in-1",
    testo:
      "Ci sono infinite possibilità di gioco con i set LEGO® Creator 3in1, che assicurano il triplo del divertimento! I costruttori creativi possono realizzare tre diversi progetti o creare tutto ciò che riescono a immaginare. I set includono fantastici veicoli, incredibili animali e scenari pieni di divertenti opportunità per il gioco di ruolo.",
  },
];

// {
//     logo: "",
//     sfondo: "",
//     nome: "",
//     testo:""
// },

function injectTheme(){
  let data = themeCall;
  const themePlace = document.querySelector(`#themePlace`);
  data.forEach((element)) => {
    cardPlace.insertAdjacentHTML("beforeend",
    `
    INSERIRE QUI HTML
    `
  )
  };
};
