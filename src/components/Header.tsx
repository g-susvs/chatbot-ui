import { FaBeer } from 'react-icons/fa';

export const Header = () => {

    const handleDisplayDrawer = () => {
        console.log('Activar drawer')
    }

    return (
        <header className="chatbot-header">
            <nav>
                <div className="chatbot-logo">
                    <img src="/logo.png" alt="logo" />
                    <h1>TILINBOT</h1>
                </div>
                <button className="drawer" onClick={handleDisplayDrawer}>
                    <FaBeer />
                </button>
            </nav>
        </header>
    )
}
