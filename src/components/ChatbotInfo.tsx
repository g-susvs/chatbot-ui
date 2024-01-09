import { useContext, } from 'react';
import { ChatbotContext } from '../context/ChatbotContext';

export const ChatbotInfo = () => {

    const { uiState } = useContext(ChatbotContext)
    const { activGuideUse } = uiState

    return (
        <section className={`chatbot-info-container scroll-custom ${activGuideUse ? 'section-active' : ''}`}>
            <div className="max-size">

                <h2>Indicaciones de uso para TilinBot</h2>
                <br />

                <p>
                    Para comenzar tu interacción con Tilin-bot, simplemente dile "Hola" al conectarte.
                </p>
                <br />
                <br />
                <h3>Preguntas Generales 💡</h3>
                <p>Si tienes preguntas generales, escríbelas directamente, y Tilin-bot se esforzará por ofrecerte respuestas útiles.</p>
                <br />
                <br />
                <h3>
                    Filtrado de Preguntas y Respuestas 📦
                </h3>
                <p>
                    Es importante tener en cuenta que el sistema realiza un filtrado automático en algunas preguntas y respuestas según su programación. Si alguna pregunta no recibe respuesta, podría estar sujeta a este filtrado.
                </p>
                <br />
                <br />
                <h3>Palabras Baneadas 🚫</h3>
                <p>Evita el uso de palabras prohibidas o que puedan activar el sistema de filtrado.</p>
                <br />

            </div>
        </section>
    )
}
