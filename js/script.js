var messageLink = document.querySelector(".button-company-contact");
var messagePopup = document.querySelector(".modal-message");
var messageClose = messagePopup.querySelector(".modal-close");
var messageSubmit = messagePopup.querySelector(".button-message-form");
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

messageSubmit.addEventListener("click", function (evt) {
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

// --- Оживление promo-slider ---

var promoSlideIndex = 1;

showPromoSlide(promoSlideIndex);

function currentPromoSlide(n) {
showPromoSlide(promoSlideIndex = n);
}

function showPromoSlide(n) {
  var i;
  var promoSlides = document.getElementsByClassName("promo-slider-item");
  var promoButton = document.getElementsByClassName("promo-slider-button");

  if (n > promoSlides.length) {
    promoSlideIndex = 1
  };
  if (n < 1) {
    promoSlideIndex = promoSlides.length
  };
  for (i = 0; i < promoSlides.length; i++) {
    promoSlides[i].style.display = "none";
  };
  for (i = 0; i < promoButton.length; i++) {
    promoButton[i].className = promoButton[i].className.replace(" active", "");
  };
  promoSlides[promoSlideIndex-1].style.display = "block";
  promoButton[promoSlideIndex-1].className += " active";
}

// --- Оживление services-slider ---

var serviceSlideIndex = 1;

showServiceSlide(serviceSlideIndex);

function currentServiceSlide(n) {
showServiceSlide(serviceSlideIndex = n);
}

function showServiceSlide(n) {
  var i;
  var serviceSlides = document.getElementsByClassName("services-slider-item");
  var serviceButton = document.getElementsByClassName("services-slider-button");

  if (n > serviceSlides.length) {
    serviceSlideIndex = 1
  };
  if (n < 1) {
    serviceSlideIndex = serviceSlides.length
  };
  for (i = 0; i < serviceSlides.length; i++) {
    serviceSlides[i].style.display = "none";
  };
  for (i = 0; i < serviceButton.length; i++) {
    serviceButton[i].className = serviceButton[i].className.replace(" active", "");
  };
  serviceSlides[serviceSlideIndex-1].style.display = "block";
  serviceButton[serviceSlideIndex-1].className += " active";
}