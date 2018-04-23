var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var nRecipe = Object.assign(object, {key, value});
  return nRecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
