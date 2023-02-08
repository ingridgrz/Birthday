const fs = require("fs");
const { parse } = require("csv-parse");
const moment = require("moment");

const CSV_STUDENTS = "2023-etudiants.csv";

function parseFile(filename){
    let results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(`./data/${filename}`)
            .pipe(parse({
                delimiter:";",
                columns: true,
                bom: true,
                to_line: 5
            }))
            .on("data", function (row){
                results.push(row)
            })
            .on("end", function () {
                resolve(results)
            })
            .on("error", function (error){
                reject(error.message)
            })
    })
}

exports.getTodaysBirthday = async (req, res) => {
    const dateDDMM = moment().format('DD/MM');
    const STUDENTS_BIRTHDAY = await parseFile(CSV_STUDENTS)
    .then(students => {
        return result = students.filter(student => student.birthday.startsWith(dateDDMM));
    });

    res.json({
        count_total: STUDENTS_BIRTHDAY.length,
        students_birthday : {
            students: STUDENTS_BIRTHDAY
        }
    })
}