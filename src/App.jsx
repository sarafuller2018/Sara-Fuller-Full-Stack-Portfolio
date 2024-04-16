// import { useState } from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom"
import "./App.css"

function App() {
    return (
        <>
            <div className='app-body'>
                <Header />
                <Navigation />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;