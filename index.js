const fs = require("fs");
const path = require("path");

const cache = new Map();

function language(languageName) {
  if (cache.has(languageName)) {
    return cache.get(languageName);
  }

  const filePath = path.join(__dirname, "lang", `${languageName}.json`);

  if (!fs.existsSync(filePath)) {
    return "404";
  }

  const data = fs.readFileSync(filePath, "utf-8");

  try {
    const json = JSON.parse(data);
    cache.set(languageName, json);
    return json;
  } catch (parseError) {
    throw parseError;
  }
}

module.exports = { language };
