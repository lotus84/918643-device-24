var messageLink = document.querySelector(".button-company-contact");
var messagePopup = document.querySelector(".modal-message");
var messageClose = messagePopup.querySelector(".modal-close");
var messageForm = messagePopup.querySelector("form");
var userName = messagePopup.querySelector("[name=user-name]");
var userEmail = messagePopup.querySelector("[name=user-email]");
var userMessage = messagePopup.querySelector("[name=user-message]");
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

messageLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  userName.focus();
})

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
})

messageForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    messagePopup.offsetWidth = messagePopup.offsetWidth;
    messagePopup.classList.add("modal-error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (messagePopup.classList.contains("modal-show")) {
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    }
  }
})

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
})