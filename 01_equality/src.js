module.exports = {
  sameLength: function(string1, string2) {
  if (string1.length == string2.length) {
  return true;
  } else {
  return false;
  }
},
  firstGreater: function(var1, var2) {
  if (var1 > var2) {
  return true;
  } else {
  return false;
  }
},
  firstGreaterOrEqualTo: function(var1, var2) {
  if (var1 >= var2) {
  return true;
  } else {
  return false;
  }
},
  firstLengthGreater: function(var1, var2) {
  if (var1.length > var2.length) {
  return true;
  } else {
  return false;
  }
},
  secondGreater: function(var1, var2) {
  if (var2 > var1) {
  return true;
  } else {
  return false;
  }
  }
}
