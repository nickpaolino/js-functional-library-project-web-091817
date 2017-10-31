fi = (function() {
  return {
    each: function(data, func) {
      if (Array.isArray(data)){
        for (const element of data){
          func(element);
        }
      }
      else {
        for (const element in data){
          func(data[element])
        }
      }
      return data
    },
    map: function(data, func){
      let newData = [];
      if (Array.isArray(data)){
        for (const element of data){
          newData.push(func(element));
        }
        return newData
      }
      else {
        for (const element in data){
          newData.push(func(data[element]))
        }
        return newData;
      }
    },
    reduce: function(data, func, initial){
      for (const element of data){
        initial = func(initial, element, data)
      }
      return initial;
    },
    find: function(data, condition){
      for (const element of data){
        if (condition(element)){
          return element
        }
      }
    },
    filter: function(data, condition){
      const newArray = [];
      for (const element of data){
        if (condition(element)){
          newArray.push(element)
        }
      }
      return newArray
    },
    size: function(collection){
      return Object.keys(collection).length;
    },
    first: function(array, n){
      if (n){
        return array.slice(0, n);
      }
      else {
        return array[0];
      }
    },
    last: function(array, n){
      if (n){
        return array.slice(-n);
      }
      else {
        return array[array.length - 1];
      }
    },
    compact: function(array){
      const newArray = [];
      for (const element of array){
        if (element){
          newArray.push(element);
        }
      }
      return newArray
    },
    sortBy: function(array, func){
      if (array.every((x, y, z) => typeof x !== "object")){
        const newArray = array.sort((a, b) => func(a) - func(b))
        return newArray;
      }
      else {
        const newArray = array.sort((a, b) => func(a).localeCompare(func(b)));
        return newArray;
      }
    },
    keys: function(object){
      const newArray = [];
      for (const element in object){
        newArray.push(element);
      }
      return newArray;
    },
    values: function(object){
      const newArray = [];
      for (const element in object){
        newArray.push(object[element]);
      }
      return newArray;
    },
    functions: function(object){
      return Object.getOwnPropertyNames(object).sort();
    },
    uniq: function(object){
      const newArray = [];
      for (const element of object){
        if (!newArray.includes(element)){
          newArray.push(element);
        }
      }
      return newArray
    }
  }
})()
