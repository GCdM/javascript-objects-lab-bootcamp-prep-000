var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var nRecipes = Object.assign({}, object, {key, value});
  return nRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
