// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      return fnCallback("Error saat read file data1 : " + err, null);
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        return fnCallback("Error saat read file data2 : " + err, null);
      }
      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          return fnCallback("Error saat read file data3 : " + err, null);
        }
        const arrData = [];
        const jsonData1 = JSON.parse(data1);
        const jsonData2 = JSON.parse(data2);
        const jsonData3 = JSON.parse(data3);
        arrData.push(getSecondWord(jsonData1.message));
        arrData.push(getSecondWord(jsonData2[0].message));
        arrData.push(getSecondWord(jsonData3[0].data.message));

        fnCallback(null, arrData);
      });
    });
  });
};

const getSecondWord = (sentence) => {
  const arrSentence = sentence.split(" ");
  return arrSentence[1];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
