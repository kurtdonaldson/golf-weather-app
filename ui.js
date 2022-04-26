// Icons
//  Golfing, watch TV, bring umbrella

class UI {
  constructor() {
    this.wind = document.getElementById("wind");
    this.temp = document.getElementById("temp");
    this.humidity = document.getElementById("humidity");
    this.location = document.getElementById("location");
    this.image = document.getElementById("icon");
    this.situation = document.getElementById("situation");
    this.weatherImage = document.getElementById("weather-icon");
    this.weatherDescription = document.getElementById("weather-description");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    if (data.message === "city not found") {
      this.searchInput = document.getElementById("searchUser").value = "";
      this.searchInput = document.getElementById("searchUser").placeholder =
        "City not found. Please try again.";
    }

    this.weatherDescription.innerHTML = `${data.weather[0].description}`;
    this.location.innerHTML = `${data.name}, ${data.sys.country}`;
    this.wind.innerHTML = parseInt(`${data.wind.speed}` * 3.6) + " kph";
    this.humidity.innerHTML = `${data.main.humidity}%`;
    this.temp.innerHTML = parseInt(`${data.main.temp}` - 273.15) + " \u00B0C";
    this.weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    if (data.wind.speed > 6) {
      this.situation.innerHTML = "Too windy, stay at home";
      this.image.src = "https://img.icons8.com/ios/344/cottage--v1.png";
    } else if (
      this.weatherDescription.innerHTML.includes("rain") ||
      this.weatherDescription.innerHTML.includes("thunder") ||
      this.weatherDescription.innerHTML.includes("drizzle")
    ) {
      this.situation.innerHTML = "Bring an umbrella";
      this.image.src = "https://img.icons8.com/ios/344/closed-umbrella.png";
    } else if (data.main.temp < 283) {
      this.situation.innerHTML = "Wear some warm clothes!";
      this.image.src =
        "https://img.icons8.com/external-wanicon-solid-wanicon/344/external-beanie-autumn-clothes-accesories-wanicon-solid-wanicon.png";
    } else {
      this.situation.innerHTML = "Perfect day for it!";
      this.image.src = "https://img.icons8.com/ios-filled/344/golf.png";
    }
    this.searchInput = document.getElementById("searchUser").placeholder =
      "City, country e.g. Auckland, NZ";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
