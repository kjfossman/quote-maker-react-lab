export default (state = [], action) => {
  console.log('top level')
  switch (action.type){
    case "ADD_QUOTE":

      return state.concat(action.quote)

    case "REMOVE_QUOTE":

      return state.filter(q => q.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      console.log('next step')
      const quoteIndex = state.findIndex(q => q.id === action.quoteId)
      const quote = {...state[quoteIndex], votes: state[quoteIndex].votes + 1}
      
      return [...state.slice(0, quoteIndex), quote, ...state.slice(quoteIndex + 1)]

    case "DOWNVOTE_QUOTE":
      const quoteIndexDown = state.findIndex(q => q.id === action.quoteId)
      const quoteDown = {...state[quoteIndexDown], votes: state[quoteIndexDown].votes - 1}
      if(quoteDown.votes < 0){
        quoteDown.votes = 0
      }
      return [...state.slice(0, quoteIndexDown), quoteDown, ...state.slice(quoteIndexDown + 1)]


    default:
      return state
  }
}
