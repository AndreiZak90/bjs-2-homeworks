function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum;
  if (arr != []) {
    initialValue = 0;
    sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let max = 0;
  let min = 0;
  max = Math.max.apply(Infinity, arr);
  min = Math.min.apply(Infinity, arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 != 0) {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      sumOddElement += 1;
    }
  }
  return sumEvenElement / sumOddElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
