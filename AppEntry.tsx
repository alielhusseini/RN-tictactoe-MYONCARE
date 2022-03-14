import React from 'react'
import { App } from './App'
import { GameStateProvider } from './components/providers'

export default function AppEntry() {
    return (
        <GameStateProvider>
            <App />
        </GameStateProvider>
    )
}
