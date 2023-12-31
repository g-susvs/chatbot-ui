import { FC } from "react"

interface Props {
    message: string;
    from: 'user' | 'bot'
}

export const Message: FC<Props> = ({ message, from }) => {
    return (
        <div className={`message ${from === 'bot' ? 'bot-message' : 'user-message'}`}>
            {
                from === 'bot' && <img src="/logo.png" alt="logo" />
            }
            <p>
                {message}
            </p>
        </div>
    )
}
