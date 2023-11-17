import { ChatbotContext } from "../context/ChatbotContext"
import { useContext } from 'react';

export const ChatbotQuestion = () => {

    const { uiState } = useContext(ChatbotContext)
    const { activGuideQuest } = uiState

    return (
        <section className={`chatbot-questions-container ${activGuideQuest ? 'section-active' : ''}`}>
            <h2>Preguntas guía</h2>
            <br />
            <p>Para probar el chatbot, puedes realizar algunas de las siguientes preguntas:</p>
            <br />
            <ul>
                <li>¿Dónde puedo ver mis cursos?</li>
                <li>¿Qué es un campus virtual?</li>
                <li>¿Cómo se dividen las notas?</li>
            </ul>
            <br />
            <br />
            <p>Para probar las <strong>palabras prohibidas</strong>, puedes realizar algunas de las siguientes preguntas:</p>
            <br />
            <ul>
                <li>¿Eres homofóbico?</li>
                <li>¿Cómo se llama el tonto de [alguien]?</li>
                <li>¿Cómo amenazo a alguien?</li>
            </ul>


        </section>
    )
}
