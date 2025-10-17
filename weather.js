const weatherTranslation = {
  "clear sky": "Цэлмэг",
  "few clouds": "Бага үүлтэй",
  "scattered clouds": "Тарсан үүлтэй",
  "broken clouds": "Халтар үүлтэй",
  "shower rain": "Бороотой",
  "rain": "Бороо",
  "thunderstorm": "Цууралттай бороо",
  "snow": "Цас",
  "mist": "Манан"
};

const description = weatherTranslation[w.weather[0].description.toLowerCase()] || w.weather[0].description;
