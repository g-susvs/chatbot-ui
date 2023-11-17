import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatbotProvider } from './context/ChatbotProvider.tsx'
import App from './App.tsx'

import './css/main.css'
import './css/media-query.css'
import './css/loader.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>,
)
