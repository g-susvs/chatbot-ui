import { FC, FormEvent, useContext, useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { ChatbotContext } from "../context/ChatbotContext"
import { getEnvVariables } from "../config"

export const InputMessage: FC = () => {

    const { VITE_SERVER_CHATBOT } = getEnvVariables()

    const { onAddNewMessage, loadingBotMsg, onLoadingBotMsg } = useContext(ChatbotContext)

    const { formState, message, onInputChange, onResetForm } = useForm({
        message: ''
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (message.trim().length < 2) return
        onAddNewMessage({ message: formState.message, from: 'user' })
        onLoadingBotMsg(true)
    }

    useEffect(() => {
        if (!loadingBotMsg) return

        fetch(VITE_SERVER_CHATBOT, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ "user_input": formState.message })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                onAddNewMessage({ message: data.response, from: 'bot' })
                onLoadingBotMsg(false)
                onResetForm()

            })
            .catch(err => console.log(err))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingBotMsg])

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input type="text"
                placeholder="Ingresa un consulta"
                onChange={onInputChange}
                name="message"
                value={message}
                disabled={loadingBotMsg} />
            <button disabled={loadingBotMsg}>Enviar</button>
        </form>
    )
}
