const axios = require("axios");

const url = "https://kepler-beta.itu.edu.tr/api/ders-kayit/v21/";

let index = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let dersIstekListesi = [
  {
    token:
      "Bearer [TOKEN]",
    crn_data: { ECRN: ["30136"], SCRN: [] },
  },
];

const main = async () => {
  while (true) {
    for (let i = 0; i < dersIstekListesi.length; i++) {
      const headers = {
        Authorization: dersIstekListesi[i]["token"],
      };
      const a = await axios.post(url, dersIstekListesi[i]["crn_data"], {
        headers: headers,
      });
      await sleep(1000 / dersIstekListesi.length);
      console.log(index);
      index++;
    }
  }
};

main();
