import { FC, useState } from "react"
import { ChatbotContext, UiState } from "./ChatbotContext"
import { Message } from "../types"

interface Props {
    children: JSX.Element
}
const msgs: Message[] = [
    { message: 'Hola ¿En qué puedo ayudarte?', from: 'bot' },
]

export const ChatbotProvider: FC<Props> = ({ children }) => {

    //* Chatbot
    const [messages, setMessage] = useState<Message[]>(msgs)
    const [loadingBotMsg, setLoadingBotMsg] = useState<boolean>(false)

    const onAddNewMessage = (msg: Message) => setMessage([...messages, msg])
    const onLoadingBotMsg = (arg: boolean) => setLoadingBotMsg(arg)

    //* UI 
    const [activeDrawer, setActiveDrawer] = useState(false)
    const [activGuideUse, setActivGuideUse] = useState(false)
    const [activGuideQuest, setActivGuideQuest] = useState(false)

    const onToggleDrawer = () => setActiveDrawer(!activeDrawer)
    const onActiveGU = (arg: boolean) => setActivGuideUse(arg)
    const onActiveGQ = (arg: boolean) => setActivGuideQuest(arg)

    const uiState: UiState = {
        activeDrawer,
        activGuideUse,
        activGuideQuest,
        onToggleDrawer,
        onActiveGU,
        onActiveGQ
    }

    return (
        <ChatbotContext.Provider value={{
            chatbotState: { messages, onAddNewMessage, loadingBotMsg, onLoadingBotMsg },
            uiState,
        }}>
            {children}
        </ChatbotContext.Provider>
    )
}
