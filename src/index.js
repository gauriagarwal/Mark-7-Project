import "./styles.css";

function translate() {
  const input = document.querySelector("#input").value;

  fetch(getTranslationUrl(input))
    .then((response) => {
      console.log({ response });
      return response.json();
    })
    .then((json) => {
      console.log({ json });
      const translation = document.querySelector("#translation");
      translation.innerHTML = json.contents.translated;
    })
    .catch(() => {
      alert("API Limit might have reached");
    });
}

const translateBtn = document.querySelector("#translate");
translateBtn.addEventListener("click", translate);

function getTranslationUrl(text) {
  var url = "https://api.funtranslations.com/translate/shakespeare.json";
  var encodedText = encodeURI(text);
  return `${url}?text=${encodedText}`;
}
