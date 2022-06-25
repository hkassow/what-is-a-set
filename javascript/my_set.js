class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (!(iterable === undefined || typeof iterable === ('string') || Array.isArray(iterable))) {
      throw new Error('bad intitialization')
    }
    this.data = {};
    if (iterable) {
      for (let item of iterable) {
        this.data[item] = true
      }
    }
      
  }

  // return number of elements in MySet
  size() {
    return this.entries().length

  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.has(item)) {
      this.data[item] = null
      return true
    }
    return false
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!Object.keys(this.data).find(x=> x===item)

  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    let array = Object.keys(this.data)
    return array
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = MySet;

