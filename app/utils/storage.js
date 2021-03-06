import AsyncStorage  from '@react-native-community/async-storage'

function clear() {
  return AsyncStorage.clear()
}

function get(key, defaultValue = null) {
  return AsyncStorage.getItem(key).then(
    value => (value !== null && value !== undefined  ? JSON.parse(value) : defaultValue)
  )
}

function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value)).catch(
    error=>{
      error && console.log(error.toString())
    }
  )
}

function remove(key) {
  return AsyncStorage.removeItem(key)
}

function multiGet(...keys) {
  return AsyncStorage.multiGet([...keys]).then(stores => {
    const data = {}
    stores.forEach((result, i, store) => {
      data[store[i][0]] = JSON.parse(store[i][1])
    })
    return data
  })
}

function multiRemove(...keys) {
  return AsyncStorage.multiRemove([...keys])
}

export default {
  clear,
  get,
  set,
  remove,
  multiGet,
  multiRemove,
}
