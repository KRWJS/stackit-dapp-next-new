//-----------------------------------------------------------------------------------------------//
export const iterate = (obj: any, cb: Function) => {
  Object.keys(obj).forEach(key => {
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null
    ) {
      obj[key] = iterate(obj[key], cb)
    }
    else {
      obj[key] = cb(obj[key])
    }
  })
  return obj
}


//-----------------------------------------------------------------------------------------------//