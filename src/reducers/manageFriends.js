export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(f => f.id != 101)}
    default:
      return state
  }
}
