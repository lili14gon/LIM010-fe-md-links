"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = exports.stats = void 0;

/* eslint-disable no-console */
const stats = arrayObject => {
  const arrayUnique = arrayObject.map(element => {
    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${new Set(arrayUnique).size}`;
};

exports.stats = stats;

const statsValidate = arrayObject => {
  const arrayOk = [];
  const arrayUnique = arrayObject.map(element => {
    if (element.statusText !== 'OK') {
      arrayOk.push(element.statusText);
    }

    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${new Set(arrayUnique).size} broken: ${arrayOk.length}`;
};

exports.statsValidate = statsValidate;