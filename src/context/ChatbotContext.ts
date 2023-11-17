import { createContext } from "react";
import { Message } from "../types";

export interface ChatbotState {
    messages: Message[];
    onAddNewMessage: (msg: Message) => void
    loadingBotMsg: boolean;
    onLoadingBotMsg: (arg: boolean) => void
}

export interface UiState {
    activeDrawer: boolean;
    activGuideUse: boolean;
    activGuideQuest: boolean;
    onToggleDrawer: () => void;
    onActiveGU: (arg: boolean) => void;
    onActiveGQ: (arg: boolean) => void;
}

export interface ChatbotContextProps {
    chatbotState: ChatbotState;
    uiState: UiState
}

export const ChatbotContext = createContext<ChatbotContextProps>({} as ChatbotContextProps)
