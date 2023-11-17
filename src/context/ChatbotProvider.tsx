import { FC, useState } from "react"
import { ChatbotContext } from "./ChatbotContext"
import { Message } from "../types"

interface Props {
    children: JSX.Element
}
const msgs: Message[] = [
    { message: 'Hola, en qué puendo ayudarte?', from: 'bot' },
]

export const ChatbotProvider: FC<Props> = ({ children }) => {

    const [messages, setMessage] = useState<Message[]>(msgs)
    const [loadingBotMsg, setLoadingBotMsg] = useState<boolean>(false)

    const onAddNewMessage = (msg: Message) => setMessage([...messages, msg])
    const onLoadingBotMsg = (arg: boolean) => setLoadingBotMsg(arg)

    return (
        <ChatbotContext.Provider value={{ messages, onAddNewMessage, loadingBotMsg, onLoadingBotMsg }}>
            {children}
        </ChatbotContext.Provider>
    )
}
