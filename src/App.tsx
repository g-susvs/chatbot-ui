import { FC, useContext } from 'react';
import { ChatMessages } from "./components/ChatMessages"
import { InputMessage } from "./components/InputMessage";
import { ChatbotContext } from './context/ChatbotContext';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { ChatbotInfo } from './components/ChatbotInfo';
import { ChatbotQuestion } from './components/ChatbotQuestion';

const App: FC = () => {

  const { chatbotState } = useContext(ChatbotContext)
  const { loadingBotMsg } = chatbotState

  return (
    <div className="wrapper">
      <Header />
      <ChatbotInfo />
      <main className="chat-container">
        <ChatMessages />
        <div className="loader-container" style={{ display: loadingBotMsg ? 'block' : 'none' }}>
          <Loader />
        </div>
        <InputMessage />
      </main>
      <ChatbotQuestion />
    </div>
  )
}

export default App
