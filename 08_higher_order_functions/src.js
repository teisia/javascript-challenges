module.exports = {

  simpleCall: function(callback){
    return callback()
  },

  each: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i])
    }
  },

  map: function(array, callback) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
      results.push(callback(array[i]));
  }
    return results
},

  reduce: function(val, callback) {
    var results = "";
    for (var i = 0; i < val; i++) {
      results.join(callback(val[i]));
  }
  return results
}

}
