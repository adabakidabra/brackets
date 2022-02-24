module.exports = function check(str, bracketsConfig) {
  // your solution

let brackMas = [];
let bracketsCon = JSON.parse(JSON.stringify(bracketsConfig));
let revCon = bracketsCon.map((el) => {
  return el.reverse();
});
let configObj = {};
revCon.forEach(function (element) {
  configObj[element[0]] = element[1];
});
let objKey = [];
for (let q in configObj) {
  objKey.push(q);
}
let niceBrack = [];
for ( var i in configObj) {
  if (configObj.hasOwnProperty(i)) {
    niceBrack.push(configObj[i]);
  }
}
for (let i = 0; i < str.length; i++) {
  let symvol = str[i];

  if (brackMas[brackMas.length - 1] === symvol && objKey.includes(brackMas[brackMas.length - 1])) {
    brackMas.pop();
  } else if (niceBrack.includes(symvol)) {
      brackMas.push(symvol)
    } else {
      if (brackMas.length === 0) {
        return false;
      }
      let hiEl = brackMas[brackMas.length - 1];
      if (configObj[symvol] === hiEl) {
        brackMas.pop()
      } else {
        return false;
      }
    }
  }
  return brackMas.length === 0
} 

