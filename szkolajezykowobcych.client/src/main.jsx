import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import Teachers from './pages/teachers/Teachers.jsx';
import Enroll from './pages/enroll/Enroll.jsx';
import Courses from './pages/courses/CoursesPage.jsx';
import Contact from './pages/contact/Contact.jsx';
import Calendar from './pages/calendar/Calendar.jsx';
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
                <Route path='/calendar' element={<Layout />}>
                    <Route index element={<Calendar />} />
                </Route>
                <Route path='/contact' element={<Layout />}>
                    <Route index element={<Contact />} />
                </Route>
                <Route path='/enroll' element={<Layout />}>
                    <Route index element={<Enroll />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>,
)
