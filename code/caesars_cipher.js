function rot13(str) {
    const rot = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M"
    }
    const arr = str.split("");
    const rotArr = [];
    let nonAlphaRegex = /[\W_]/g;
    for (let i = 0; i < arr.length; i++) {
      if (nonAlphaRegex.test(arr[i])) {
        rotArr.push(arr[i])
      } else {
        rotArr.push(rot[arr[i]]);
      }
    }
    return rotArr.join("");
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");