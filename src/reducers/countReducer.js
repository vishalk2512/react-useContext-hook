const countReducer = (count, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return count + action.step
    }
    case 'DECREASE': {
      return count - action.step
    }
    default: {
      throw new Error(`${action.type} is not valid dispatch type`)
    }
  }
}

export default countReducer
