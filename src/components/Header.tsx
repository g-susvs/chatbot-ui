import { CiMenuBurger } from "react-icons/ci";
import { useContext } from 'react';
import { ChatbotContext } from '../context/ChatbotContext';

export const Header = () => {

    const { uiState } = useContext(ChatbotContext)

    const { activeDrawer, onToggleDrawer, onActiveGQ, onActiveGU } = uiState


    const handleDisplayDrawer = () => {
        onToggleDrawer()
    }

    return (
        <>
            <header className="chatbot-header">
                <nav>
                    <div className="chatbot-logo">
                        <img src="/logo.png" alt="logo" />
                        <h1>TILINBOT</h1>
                    </div>
                    <button className="drawer" onClick={handleDisplayDrawer}>
                        <CiMenuBurger />
                    </button>
                </nav>
            </header>
            <div className={`drawer-container  ${activeDrawer ? 'section-active' : ''}`}>
                <div className="list-buttons">
                    <button onClick={() => {
                        onToggleDrawer()
                        onActiveGU(false)
                        onActiveGQ(false)
                    }}>
                        <span>
                            Volver al chatbot
                        </span>
                    </button>
                    <button onClick={() => {
                        onActiveGU(true)
                        onActiveGQ(false)
                        onToggleDrawer()
                    }}>
                        <span>
                            Indicaciones de uso
                        </span>

                    </button>
                    <button onClick={() => {
                        onActiveGU(false)
                        onActiveGQ(true)
                        onToggleDrawer()

                    }}>
                        <span>
                            Preguntas guía
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
