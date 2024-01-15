const fs = require("fs");
const path = require("path");

const cache = new Map();

function language(languageName) {
  if (cache.has(languageName)) {
    return cache.get(languageName);
  }

  const filePath = path.join(__dirname, "languages", `${languageName}.json`);

  if (!fs.existsSync(filePath)) {
    return "not found";
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
