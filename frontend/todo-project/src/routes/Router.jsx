import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import CompletedPage from '../pages/CompletedPage';
import NewtaskPage from '../pages/NewtaskPage';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/completed" element={<CompletedPage />} />
                <Route path="/newtask" element={<NewtaskPage />} />
            </Routes>
        </div>
    )
}

export default Router
