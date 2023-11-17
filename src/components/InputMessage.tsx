import { FC, FormEvent, useContext, useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { ChatbotContext } from "../context/ChatbotContext"

export const InputMessage: FC = () => {

    const { onAddNewMessage, loadingBotMsg, onLoadingBotMsg } = useContext(ChatbotContext)

    const { formState, message, onInputChange, onResetForm } = useForm({
        message: ''
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (message.trim().length < 2) return
        console.log()

        onAddNewMessage({ message: formState.message, from: 'user' })
        onLoadingBotMsg(true)
        onResetForm()
    }

    useEffect(() => {
        if (!loadingBotMsg) return

        console.log('Cargando...')

        setTimeout(() => {
            onAddNewMessage({ message: 'Respuesta del bot', from: 'bot' })
            onLoadingBotMsg(false)
        }, 1000);

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
