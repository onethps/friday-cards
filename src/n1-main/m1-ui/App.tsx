import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import ProjectRoutes from "./routes/ProjectRoutes";
import Header from "./header/Header";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <ProjectRoutes/>
            </HashRouter>

        </div>
    );
}

export default App;
