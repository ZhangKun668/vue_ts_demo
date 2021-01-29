const storeFunctionName = {
  "session": sessionStorage,
  "local": localStorage
}

class Store {
  setItem(key: string, value: any, type: string = "session") {
    storeFunctionName[type].setItem(key, JSON.stringify(value))
  }

  getItem(key: string, type: string = "session") {
    const result = storeFunctionName[type].getItem(key);

    return JSON.parse(result);
  }

  removeItem(key: string, type: string = "session") {
    storeFunctionName[type].removeItem(key);
  }
}

export default new Store();