import { FC, useContext } from 'react';
import { ChatMessages } from "./components/ChatMessages"
import { InputMessage } from "./components/InputMessage";
import { ChatbotContext } from './context/ChatbotContext';
import { Loader } from './components/Loader';

const App: FC = () => {

  const { loadingBotMsg } = useContext(ChatbotContext)

  return (
    <div className="wrapper">
      <header className="chatbot-header">
        <div className="chatbot-logo">
          <img src="/logo.png" alt="logo" />
          <h1>CHAT - BOT</h1>
        </div>
      </header>
      <main className="chat-container">
        <ChatMessages />
        <div className="loader-container" style={{ display: loadingBotMsg ? 'block' : 'none' }}>
          <Loader />
        </div>
        <InputMessage />
      </main>
    </div>
  )
}

export default App
