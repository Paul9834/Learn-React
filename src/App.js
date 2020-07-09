import React from 'react';
import './App.css';
import BannerImage from "./components/Banner";
import PhotoEntry from "./components/PhotoEntry";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BannerImage/>
                <div>
                    <h1>Kevin Paul Montealegre Melo</h1>
                    <h1>Desarrollador de Aplicaciones Móviles</h1>
                </div>
                <PhotoEntry src="1.jpg" location="Mac Book Pro" caption="Programando en iOS"/>

            </header>
        </div>
    );
}

export default App;
