import React from 'react';
import './App.css';
import BannerImage from "./components/Banner";
import UsersTable from "./components/UsersTable";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BannerImage/>
                <div>
                    <h1>Ranking GoPoli</h1>
                    <br></br>
                </div>
                <UsersTable/>
            </header>
        </div>
    );
}

export default App;
