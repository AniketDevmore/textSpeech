const inputText = document.getElementById("input");
const btn = document.getElementById("speech");

btn.addEventListener("click", function () {
  let speechText = inputText.value;

  let speechData = new SpeechSynthesisUtterance();

  speechData.text = speechText;

  speechSynthesis.speak(speechData);
});
