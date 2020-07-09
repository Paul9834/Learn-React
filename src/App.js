import React from 'react';
import './App.css';
import BannerImage from "./components/Banner";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BannerImage/>
                <div>
                    <h1>Kevin Paul Montealegre Melo</h1>
                    <h1>Desarrollador de aplicaciones móviles</h1>
                </div>
            </header>
        </div>
    );
}

export default App;
