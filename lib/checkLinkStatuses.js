const getLinkStatusCode = require("./getLinkStatusCode");
const store = require("./store");

async function checkLinkStatuses(cacheDuration) {
  const linksToCheck = Object.keys(store);
  const results = await Promise.all(
    linksToCheck.map((link) => getLinkStatusCode(link, cacheDuration))
  );
  results.forEach((result) => {
    store[result.url].setHttpStatusCode(result.httpStatusCode);
  });
}

module.exports = checkLinkStatuses;
