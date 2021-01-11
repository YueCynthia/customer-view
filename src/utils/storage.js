class MyStorage {
  constructor (storage) {
    this.sysName = 'activity-'
    this._storage = storage
  }

  keyName (key) {
    return `${this.sysName}-${key}`
  }

  getItem (key) {
    return JSON.parse(this._storage.getItem(this.keyName(key)))
  }

  setItem (key, value = '') {
    this._storage.setItem(this.keyName(key), JSON.stringify(value))
  }

  removeItem (key) {
    return this._storage.removeItem(this.keyName(key))
  }
}
const LS = new MyStorage(window.localStorage)
const SS = new MyStorage(window.sessionStorage)
export { LS, SS }
