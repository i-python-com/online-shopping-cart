const cartReducer = (state = [], action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]

    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state
  }
}

export default cartReducer
