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

    case 'SET_SCORE_FROM_LOCALSTORAGE':
      const score = parseInt(localStorage.getItem('score')) || 0
      if (!score) localStorage.setItem('score', 0)
      return {
        ...gameState,
        score,
      }

    case 'INCREMENT_SCORE': {
      const newScore = gameState.score + 1
      localStorage.setItem('score', newScore)
      return {
        ...gameState,
        score: newScore,
      }
    }

    case 'DECREMENT_SCORE': {
      const newScore = gameState.score > 0 ? gameState.score - 1 : 0
      localStorage.setItem('score', newScore)
      return {
        ...gameState,
        score: newScore,
      }
    }
  }
}
