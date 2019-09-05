const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const item in collection) {
        alert(collection[item], item, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(callback(collection[idx]))

      return newArr
    },

    reduce: function(collection, callback, acc) {

    },

    find: function(collection, predicate) {

    },

    first: function(collection, arg) {
      if (!arg){
        return collection[0]
      }
      else 
        return collection.slice(0, arg)
    },

    last: function(collection, arg) {
      if (!arg){
        return collection[collection.length-1]
      }
      else
        return collection.slice(arg * -1)
    },

    sortBy: function(collection, callback) {
      let returnArray = {...collection};
      returnArray.sort(function(a, b) {return callback(a) - callback(b)})

      return returnArray
    },

    keys: function(collection) {
      let returnArray = []
      for (const key in collection) {
        returnArray.push(key)
      }
      return returnArray
    },

    values: function(collection) {
      let returnArray = []
      for (const key in collection) {
        returnArray.push(collection[key])
      }
      return returnArray
    },


    functions: function(collection) {
      let returnArray = []
      for (const key in collection) {
        if (typeof collection[key] === 'function') {
          returnArray.push(key)
        }
      }
      return returnArray
    },


  }
})()

fi.libraryMethod()
