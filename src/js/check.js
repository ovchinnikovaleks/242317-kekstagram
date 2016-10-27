
/**
 * Created by Alexey on 13.10.2016.
 */
'use strict';

function getMessage(a, b) {

  if (a === true) {
    return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
  } else if (a === false) {
    return 'Переданное GIF-изображение не анимировано';
  } else if (typeof a === 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
  } else if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;
    for (var i = 0; i < Math.min(a.length, b.length); i++) {
      artifactsSquare += a[i] * b[i];
    }
    return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
  } else if (Array.isArray(a)) {
    var amountOfRedPoints = 0;
    for (var j = 0; j < a.length; j++) {
      amountOfRedPoints += a[j];
    }
    return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
  } else {
    return 'Переданы некорректные данные';
  }

}
