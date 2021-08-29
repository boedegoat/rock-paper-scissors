import React, { createContext, useContext, useReducer } from 'react'
import { gameReducer, gameState } from './gameReducer'

const GameContext = createContext({})

const GameProvider = ({ children }) => (
  <GameContext.Provider value={useReducer(gameReducer, gameState)}>
    {children}
  </GameContext.Provider>
)

export default GameProvider

export function useGameContext() {
  return useContext(GameContext)
}
