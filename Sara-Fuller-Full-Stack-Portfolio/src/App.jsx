// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom"

function App() {
return (
<div className=''>
    <Header></Header>
    <Navigation></Navigation>
    <main>
        <Outlet></Outlet>
    </main>
    <Footer></Footer>
</div>
);
}

export default App;