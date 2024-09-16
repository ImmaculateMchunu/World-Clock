function updateWorldClocks() {
  const countries = [
    { id: "los-angeles", tz: "America/Los_Angeles" },
    { id: "new-york", tz: "America/New_York" },
    { id: "tokyo", tz: "Asia/Tokyo" },
    { id: "paris", tz: "Europe/Paris" }
  ];

  countries.forEach(country => {
    const element = document.querySelector(`#${country.id}`);
    const dateElement = element.querySelector(".date");
    const timeElement = element.querySelector(".time");
    const currentTime = moment().tz(country.tz);

    dateElement.innerHTML = currentTime.format("MMMM Do YYYY");
    timeElement.innerHTML = currentTime.format("h:mm:ss A");
  });
}

setInterval(updateWorldClocks, 1000);