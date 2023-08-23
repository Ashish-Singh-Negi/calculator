const result = document.getElementById("result");
const storeResult = document.getElementById("storeResult");
const input = document.querySelectorAll("input");

const numArr = [];
var data;
var storeData = 0;
var totalResult = 0;

function addNum(...numbers) {
  removeNum();
  numArr.push(...numbers);
  numArr.forEach((e) => {
    if (result.innerText == 0) {
      result.innerText = e;
    } else {
      result.innerText += e;
    }
    data = result.innerText;
  });
}

function clearAll() {
  numArr.forEach((e) => {
    numArr.pop(e);
  });
  result.innerText = 0;
  storeResult.innerText = "";
  data = 0;
  totalResult = 0;
}

function removeNum() {
  numArr.forEach((e) => {
    numArr.shift(e);
  });
}

function addition() {
  storeResult.innerText = Number(data) + "+";
  storeData = Number(data);
  data = 0;

  if (totalResult == storeData) {
    totalResult = 0;
    totalResult += storeData;
  } else {
    totalResult += storeData;
  }

  storeResult.innerText = Number(totalResult) + "+";
  result.innerText = 0;
}

function subtration() {
  storeData = Number(data);
  data = 0;
  if (totalResult > storeData) {
    totalResult = totalResult - storeData;
  } else if (totalResult == storeData) {
    totalResult = 0;
    totalResult = storeData - totalResult;
  } else if (totalResult < storeData && totalResult != 0) {
    totalResult -= storeData;
  } else {
    totalResult = storeData - totalResult;
  }
  storeResult.innerText = Number(totalResult) + "-";
  result.innerText = 0;
}

function multiplication() {
  storeResult.innerText = Number(data) + "x";
  storeData = Number(data);
  if (totalResult == 0) {
    totalResult = storeData;
  } else if (storeData == 0 && totalResult != 0) {
    if (result.innerText == 0) {
      storeData = 0;
    } else {
      storeData = 1;
    }
    totalResult *= storeData;
    storeResult.innerText = Number(totalResult) + "x";
  } else {
    totalResult *= storeData;
  }

  storeResult.innerText = Number(totalResult) + "x";
  data = 0;
  result.innerText = 0;
}

function division() {
  storeResult.innerText = Number(data) + "/";
  storeData = Number(data);
  data = 0;

  if (totalResult == 0) {
    totalResult = storeData;
  } else if (storeData == 0 && totalResult == 0) {
    totalResult = 1;
    totalResult = storeData / totalResult;
  } else if (storeData == 0) {
    result.innerText = 0;
  } else {
    totalResult /= storeData;
  }
  storeResult.innerText = Number(totalResult) + "/";
  result.innerText = 0;
}

function dot() {
  result.innerText += ".";
}

function percentage() {
  if (data == 0 && totalResult != 0) {
    result.innerText = Number(totalResult) / 100;
  } else {
    result.innerText = Number(data) / 100;
  }
  totalResult = result.innerText;
  data = 0;
}

function ans() {
  if (storeResult.innerText.includes("+")) {
    addition();
    storeResult.innerText = "";
    result.innerText = totalResult;
  } else if (storeResult.innerText.includes("-")) {
    subtration();
    storeResult.innerText = "";
    result.innerText = totalResult;
  } else if (storeResult.innerText.includes("x")) {
    // data = storeData;
    multiplication();
    storeResult.innerText = "";
    result.innerText = totalResult;
  } else if (storeResult.innerText.includes("/")) {
    division();
    storeResult.innerText = "";
    result.innerText = totalResult;
  } else {
    console.log("last else hitted");
  }
}

function doubleZero() {
  result.innerText += 0;
  result.innerText += 0;
  data = result.innerText;
}

function del() {
  const delArr = [];
  delArr.push(...result.innerText);
  delArr.pop();

  if(result.innerText.length == 1){
    result.innerText = 0;
  }else{
    result.innerText = "";
  }

  delArr.forEach((e) => {
    result.innerText += e;
  });
  data = result.innerText;
}


