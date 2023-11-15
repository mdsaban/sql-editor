export default function (context, inject) {

  const globalFunctions = {
    flattenObject(obj) {
      const flattened = {}
      Object.keys(obj).forEach((key) => {
        const value = obj[key]
        if (typeof value === 'object' || Array.isArray(value)) {
          Object.assign(flattened, this.flattenObject(value))
        } else {
          flattened[key] = value
        }
      })
      return flattened
    },
  }

  inject('globalFunctions', globalFunctions)
}
