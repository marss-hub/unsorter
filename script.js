//Example: mainMix("112234555") // '512354215'

function mainMix(str) {
    const stringsArr = getArrangeDoubles(str);
    let aloneChars = getOnes(str);

    let surplusCharsStr = getSurplus(stringsArr);

    const halfArr = getHalf(stringsArr);
    let mixedStr = getMixHalf(halfArr);
    let mixedStrMirror = mixedStr.split("").reverse().join("");

    //если "одиночных" нечетное к-во, то один символ убираем в "остаток"
    if (aloneChars.length % 2 !== 0) { 
        surplusCharsStr = surplusCharsStr.concat(aloneChars.slice(-1));
        aloneChars = aloneChars.slice(0, -1);
    }

    // добавляем "одиночек" к "половинкам" поровну
    mixedStr = mixedStr.concat( aloneChars.slice(0, (aloneChars.length / 2)) );
    const tempCharsBox = aloneChars.slice((aloneChars.length / 2) * - 1);
    mixedStrMirror = tempCharsBox.concat(mixedStrMirror);

    //"зеркалим" половину (которая со стороны max) "остатка", если "остаток" больше 2 символов
    if (surplusCharsStr.length > 2) {
    const halfSurplus = surplusCharsStr.slice(0, (surplusCharsStr.length / 2).toFixed() );
    const halfSurplusMirror = halfSurplus.split("").reverse().join("");
    surplusCharsStr = halfSurplusMirror.concat( surplusCharsStr.slice( (surplusCharsStr.length / 2).toFixed() * - 1 ) );
    }

    //собираем все в одну строку
    const resultStr = '';
    return resultStr.concat(mixedStr, surplusCharsStr, mixedStrMirror);
}

//Возвращает отсортированный массив со строками, в которых повторяющиеся символы входящей строки
function getArrangeDoubles(str) {
  let checkedChars = "";
  const repeatArrChars = [];

  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    if (checkedChars.indexOf(str[strIndex]) !== -1) continue;
    if (str.indexOf(str[strIndex]) !== str.lastIndexOf(str[strIndex])) {
      const repeatCount = str.split(str[strIndex]).length - 1;
      repeatArrChars.push(str[strIndex].repeat(repeatCount));
    }

    checkedChars = checkedChars.concat(str[strIndex]);
  }
  return repeatArrChars.sort((a, b) => b.length - a.length);
}

//Возвращает строку с НЕ повторяющимися символами входящей строки
function getOnes(str) {
  let checkedChars = "";
  let noRepeatChars = "";

  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    if (checkedChars.indexOf(str[strIndex]) !== -1) continue;
    if (str.indexOf(str[strIndex]) === str.lastIndexOf(str[strIndex])) {
      noRepeatChars = noRepeatChars.concat(str[strIndex]);
    }
  }
  return noRepeatChars;
}

//Возвращает строку с "остатком" - по одному символу с каждого нечетного эл-та (в порядке эл-тов массива)
// ! Функция работает только с сортированным массивом
function getSurplus(arr) {
  let surplusChars = "";
  for (let index = 0; arr[index] !== undefined; index++) {
    if (arr[index].length % 2 !== 0) {
      surplusChars = surplusChars.concat(arr[index][0]);
    }
  }
  return surplusChars;
}

//Возвращает массив, в котором в каждом эл-те половина от аналогичного эл-та во входящем массиве. (в порядке эл-тов массива)
//Для нечетных эл-тов кол-во возвращаемых округляется в меньшую сторону (в исходном 5 - в возвращаемом 2)
// ! Функция работает только с сортированным массивом
// ! Для работы только с массивом, где все эл-ты из одинаковых символов !
function getHalf(arr) {
  const halfCharArr = [];
  for (let index = 0; arr[index] !== undefined; index++) {
    const repeatCount =
      (arr[index].length / 2).toFixed() - (arr[index].length % 2);
    halfCharArr.push(arr[index][0].repeat(repeatCount));
  }
  return halfCharArr;
}

//Возвращает "перемешанную" половину строки, собранную из символов в массиве
// ! Функция работает только с сортированным массивом
function getMixHalf(arr) {
  let halfMixedStr = "";
  for (let currentIndex = 0; currentIndex < arr[0].length; currentIndex++) {
    for (let index = 0; arr[index] !== undefined; index++) {
      if (arr[index][currentIndex] === undefined) continue;
      halfMixedStr = halfMixedStr.concat(arr[index][currentIndex]);
    }
  }
  return halfMixedStr;
}
