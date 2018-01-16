var time = new Date().getHours();

var noon = 12;
var evening = 18; // 6PM
var wakeuptime = 9; // 9AM
var lunchtime = 12; // 12PM
var partyTime = 17; // 5PM
var naptime = lunchtime + 2; // 2PM

var isPartyTime = false;

var lolcat = document.getElementById('lolcat');
var message = document.getElementById('timeEvent');
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var partyTimeButton = document.getElementById("partyTimeButton");

// partyTimeButton.innerText = "PARTY TIME!";
// partyTimeButton.style.backgroundColor = "#222";

var updateClock = function() {

  var messageText;
  var image = "https://s-media-cache-ak0.pinimg.com/564x/d4/e5/95/d4e59583dd5d61dc2b3dc7221cce138b.jpg";

  if (time == partyTime) {
    image = "https://s-media-cache-ak0.pinimg.com/564x/60/03/71/60037103e6ff49b98a29312aa0fd1383.jpg";
    messageText = "It's time to paaartay";
  } else if (time == naptime) {
    image = "https://s-media-cache-ak0.pinimg.com/564x/9d/bc/26/9dbc26a52b085d0e9af0b0b8540c63a6.jpg";
    messageText = "Get that nap!";
  } else if (time == lunchtime) {
    image = "https://s-media-cache-ak0.pinimg.com/564x/f5/16/56/f51656c726327ea26422b20e49b85406.jpg";
    messageText = "It's chowtime!";
  } else if (time == wakeuptime) {
    image = "https://s-media-cache-ak0.pinimg.com/564x/62/16/19/621619229b81b6d413f68d5b4e156ffc.jpg";
    messageText = "Rise and shine!";
  } else if (time < noon) {
    messageText = "Good morning, Luv!";
  } else if (time >= evening) {
    messageText = "Good Evening, Doll!";
  } else {
    messageText = "Good afternoon, Pal!";
  }

  lolcat.src = image;
  message.innerText = messageText;

  showCurrentTime();

};

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {

  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "white";
  }

};

partyTimeButton.addEventListener('click', partyEvent);

var lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

var napEvent = function(hour) {
  naptime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
