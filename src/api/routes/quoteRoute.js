module.exports = (server) => {
    const quoteController = require("../controllers/quoteController");

    server.get("/getQuotes", quoteController.getTodaysQuote);
}