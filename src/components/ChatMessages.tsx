import { FC, useContext, useEffect, useRef } from 'react';
import { Message } from './Message';
import { ChatbotContext } from '../context/ChatbotContext';


export const ChatMessages: FC = () => {

    const { messages } = useContext(ChatbotContext)

    const $messagesList = useRef<HTMLElement>(null)

    useEffect(() => {

        if ($messagesList.current) {
            $messagesList.current.scrollTop = $messagesList.current.scrollHeight;
        }

    }, [messages])


    return (
        <section ref={$messagesList} className="messages-container">
            {
                messages.map((msg, idx) => {
                    return (
                        <Message key={idx} from={msg.from} message={msg.message} />
                    )
                })
            }
        </section>
    )
}
