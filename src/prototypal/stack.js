var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.end = 0;
  return instance;
};

var stackMethods = {
  push: function(value){
    this[this.end++] = value;
  },
  pop: function(){
    if(this.end>0){
      var value = this[--this.end];
      delete this[this.end];
      return value;
    }
  },
  size: function(){
    return this.end;
  }
};


