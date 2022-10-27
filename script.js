// Manipulation du DOM
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const sunrise = document.getElementById("sunrise");
const humidity = document.getElementById("humidity");

// API infos
const options = {
  method: "GET", // requête HTTP de type 'read' ou lecture
  headers: {
    "X-RapidAPI-Key": "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

// Requete de recherche
searchButton.onclick = () => {
  // on vérifie que la zone de saisie ne soit pas vide
  if (searchInput.value === "") {
    alert("Veuillez saisir une ville.");
  } else {
    // on récupère la valeur saisie
    const searchValue = searchInput.value;
    // requête
    fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchValue}&format=json&u=f`,
      options
    )
      // conversion de la réponse à notre requête au bon format
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        // remplissage des différentes zones d'affichage avec les informations reçues
        city.innerText = `${response.location.city}, ${response.location.country}`;
        condition.innerText = `${response.current_observation.condition.text}`;
        temperature.innerText = `🌡 Temperature :  ${response.current_observation.condition.temperature}°F`;
        sunrise.innerText = `☀ Sunrise :  ${response.current_observation.astronomy.sunrise}`;
        humidity.innerText = `💧 Humidity :  ${response.current_observation.atmosphere.humidity}%`;
      })
      // en cas d'erreur, l'afficher dans la console
      .catch((err) => console.error(err));
  }
};
