// Hitta element på sidan
const vibes = document.querySelector("#vibes");
const img = document.querySelector("#img1");
const header = document.getElementById("header");
const container = document.getElementById("container");
const thanksDiv = document.querySelector(".thanks");
const thxMsg = document.getElementById("thxMsg");
// Hitta knappar på sidan
const showHideBtn = document.querySelector(".show-hide");
const changePicBtn = document.querySelector(".change-pic");
const yellowBtn = document.querySelector(".yellow-bg");
const greenBtn = document.querySelector(".green-bg");
const blueBtn = document.querySelector(".blue-bg");
const goodVibesBtn = document.querySelector(".good-vibes");
const headerBtn = document.querySelector(".header");
const removeHeaderBtn = document.querySelector(".remove-header");
const showHeaderBtn = document.querySelector(".show-header");

// Funktioner för att ändra sidans innehåll
function hideImg() {
  img.style.visibility = "hidden";
}

function showImg() {
  console.log("showImg called");
  img.style.visibility = "visible";
}

function changeImg() {
  console.log("changeImg succesfully called");
  if (img.src == "https://thumbs.dreamstime.com/z/cyber-woman-orange-11363555.jpg") {
    img.src = "https://preview.redd.it/akiinn6djtd21.jpg?auto=webp&s=52cd4cd252e44b0c06e80d190edb032e39492a76";
  } else {
    img.src = "https://thumbs.dreamstime.com/z/cyber-woman-orange-11363555.jpg";
  }
}

function changeBg() {
  console.log("changeBg called");
  const colors = [
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ];
  while (true) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (document.body.style.backgroundColor != color) {
      document.body.style.backgroundColor = color;
      break;
    }
  }
}

function toggleVibes() {
  console.log("toggleVibes called");
  if (vibes.textContent == "") {
    vibes.textContent = "Du kan klara allt";
  } else {
    vibes.textContent = "";
  }
}

function toggleTime() {
  const time = document.getElementById("time");
  console.log("Toggle time called");

  if (time.textContent == "") {
    time.textContent = new Date().toString();
  } else {
    time.textContent = "";
  }
}



function toggleHeader() { // Centerar/ocenterar de element längst upp in i headern

  // Kollar om användaren redan tryck på knappen
  if (header.style.alignContent !== "center") {
    // lägger till style element som krävs för att skapa headern
    header.style.alignItems = "center";
    header.style.alignContent = "center";
    header.style.justifyContent = "center";
    header.style.flexDirection = "column";
    header.style.background = "blue";
    header.style.width = "99vw";
    thxMsg.textContent = "Tack för att du besöker min sida";
    img.style.border = "0.5vw solid green";
    container.style.top = "65vh";

  } else {
    // gör tillbaka headern till sin defualt style
    header.style.alignItems = "";
    header.style.alignContent = "";
    header.style.justifyContent = "";
    header.style.flexDirection = "column";

    // matchar top diven med backgrunden
    header.style.background = document.body.style.background;
    header.style.width = "";
    thxMsg.textContent = "";
    img.style.border = "";
    container.style.top = "50vh";

  }
}

function removeHeader() {
  header.remove();
  thxMsg.remove()
}

function showHeader() {
  document.body.prepend(header);
  document.body.prepend(thxMsg)
}




