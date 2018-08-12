//////////////////////////////
// deepClone(objectPassed)
//////////////////////////////
// This completely clones an
// object immutably
//////////////////////////////
export function deepClone(objectPassed) {
  if (objectPassed === null || typeof objectPassed !== "object") {
    return objectPassed;
  }
  var temporaryStorage = objectPassed.constructor();
  for (var key in objectPassed) {
    temporaryStorage[key] = deepClone(objectPassed[key]);
  }
  return temporaryStorage;
}
