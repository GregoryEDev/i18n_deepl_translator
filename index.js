const fs = require("fs");
const https = require("https");

const deeplUrl = "https://api-free.deepl.com/v2";
const deeplApiKey = "f91cd3ac-f1e2-483e-b651-48b76606a450:fx";
const sourceFile = require("./input/en.json");
const targetLanguage = "cs";
const translatedStrings = {};

const translate = async () => {
  try {
    for await (const key of Object.keys(sourceFile.translations)) {
      const translatedValue = await new Promise((resolve, reject) => {
        https.get(
          `${deeplUrl}/translate?auth_key=${deeplApiKey}&text=${sourceFile.translations[key]}&target_lang=${targetLanguage}`,
          (res) => {
            let data = "";
            res.on("data", (chunk) => {
              data += chunk;
            });
            res.on("error", (err) => {
              reject(err);
            });
            res.on("end", () => {
              if (res.statusCode !== 200) {
                reject(JSON.parse(data).message);
              } else {
                resolve(JSON.parse(data).translations[0].text);
              }
            });
          }
        );
      });

      translatedStrings[key] = translatedValue;
    }

    fs.writeFileSync(
      `./output/${targetLanguage}.json`,
      JSON.stringify(translatedStrings, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
};

translate();
