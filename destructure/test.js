var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
// ここでデストラクチャリングを使ってname.familyをfamilyNameに。
// birth.day を birthDay に束縛してください。

var test = {familyName:json.name.family, birthDay:json.birth.day};

var {familyName, birthDay} = test;

console.log(familyName);
console.log(birthDay);
