class Fetch {
  async getCurrent(input) {
    const myKey = "c8d53b160ed7a3a8a4cf688571d362c2";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
