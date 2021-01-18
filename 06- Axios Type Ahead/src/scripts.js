const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((node) => node.json())
  .then((data) => cities.push(...data));

function findMatch(phraseToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(phraseToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatch(this.value, cities);
  console.log(matchArray);
  const html = matchArray
    .map((place) => {
      const innerRegex = new RegExp(this.value, "gi");
      const cityNameDisplay = place.city.replace(
        innerRegex,
        `<span class="hl">${this.value}</span>`
      );
      const stateNameDisplay = place.state.replace(
        innerRegex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityNameDisplay}, ${stateNameDisplay}</span>
        <span class="population">${displayNumberWithCommas(
          place.population
        )}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
