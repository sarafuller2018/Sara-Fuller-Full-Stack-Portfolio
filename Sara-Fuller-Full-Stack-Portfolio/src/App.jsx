// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom"

function App() {
return (
<div>
    <Header></Header>
    <Navigation></Navigation>
    <main>
        <Outlet></Outlet>
    </main>
</div>
);
}

export default App;