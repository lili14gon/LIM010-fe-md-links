/* eslint-disable no-console */
export const stats = (arrayObject) => {
  const arrayUnique = arrayObject.map((element) => {
    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${(new Set(arrayUnique)).size}`;
};
export const statsValidate = (arrayObject) => {
  const arrayOk = [];
  const arrayUnique = arrayObject.map((element) => {
    if (element.statusText !== 'OK') {
      arrayOk.push(element.statusText);
    }
    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${(new Set(arrayUnique)).size} broken: ${arrayOk.length}`;
};
