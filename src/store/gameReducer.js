export const gameState = {
  userFinger: '',
  compFinger: '',
  result: '',
  score: 0,
}

export function gameReducer(gameState, action) {
  switch (action.type) {
    case 'RESET':
      return {
        ...gameState,
        userFinger: '',
        compFinger: '',
        result: '',
      }

    case 'SET_USER_FINGER':
      return {
        ...gameState,
        userFinger: action.userFinger,
      }

    case 'SET_COMP_FINGER':
      return {
        ...gameState,
        compFinger: action.compFinger,
      }

    case 'CALCULATE_RESULT':
      let result = ''
      switch (gameState.userFinger) {
        case gameState.compFinger:
          result = 'draw'
          break

        case 'rock':
          result = gameState.compFinger === 'paper' ? 'lose' : 'win'
          break

        case 'paper':
          result = gameState.compFinger === 'scissors' ? 'lose' : 'win'
          break

        case 'scissors':
          result = gameState.compFinger === 'rock' ? 'lose' : 'win'
          break
      }

      return {
        ...gameState,
        result,
      }

    case 'INCREMENT_SCORE':
      return {
        ...gameState,
        score: gameState.score + 1,
      }

    case 'DECREMENT_SCORE':
      return {
        ...gameState,
        score: gameState.score > 0 ? gameState.score - 1 : 0,
      }
  }
}
