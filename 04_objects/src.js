module.exports = {

person: function(names) {
var names = [ {firstName: "John", lastName: "Mayer"}, {firstName: "Kate", lastName: "Spaid"}, {firstName: "Don", lastName: "Johnson"}];
for (var i = 0; i < names.length; i++) {
  if ((names[i].firstName === "John") && (names[i].lastName === "Mayer")) {
    return names[i];
  }
}
},

sweetnessProperty: function(obj) {
  return obj.sweetness;
},

savorynessProperty: function(obj) {
  for (var key in obj) {
    if (key === "savory\-ness") {
      return obj[key];
    }
  }
},

keys: function(obj) {
  newArray = [];
  for (var key in obj) {
    return key;
  }
}



}
