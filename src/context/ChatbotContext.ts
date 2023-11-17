import { createContext } from "react";
import { Message } from "../types";

export interface ChatbotContextProps {
    messages: Message[];
    onAddNewMessage: (msg: Message) => void
    loadingBotMsg: boolean;
    onLoadingBotMsg: (arg: boolean) => void
}

export const ChatbotContext = createContext<ChatbotContextProps>({} as ChatbotContextProps)
