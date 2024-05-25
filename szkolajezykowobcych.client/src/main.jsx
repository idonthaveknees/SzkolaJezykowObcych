import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Teachers from './teachers/Teachers.jsx';
import Courses from './courses/CoursesPage.jsx';
import Layout from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/teachers' element={<Layout />}>
                    <Route index element={<Teachers />} />
                </Route>
                <Route path='/courses' element={<Layout />}>
                    <Route index element={<Courses />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>,
)
