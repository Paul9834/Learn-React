import React from 'react';
import './App.css';
import BannerImage from "./components/Banner";
import UsersTable from "./components/UsersTable";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BannerImage/>
                <div>
                    <h1>Kevin Paul Montealegre Melo</h1>
                    <h1>Desarrollador de Aplicaciones Móviles</h1>
                </div>
                <UsersTable/>
            </header>
        </div>
    );
}

export default App;
