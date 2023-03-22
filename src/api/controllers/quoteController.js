const fs = require("fs");
const { parse } = require("csv-parse");

const CSV_QUOTES = "2023-quotes.csv";

const parseService = require("../services/parseService");

function randomNumber(max){
    return Math.floor(Math.random() * max);
}

exports.getTodaysQuote = async (req, res) => {
    const QUOTES = await parseService.parseFile(CSV_QUOTES)
    .then(quotes => {
        return quotes[randomNumber(quotes.length)];
    });

    res.json({
         QUOTES,
        })
}