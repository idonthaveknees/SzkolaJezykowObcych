import { MonthlyCalendar } from './../../components/MonthlyCalendar.jsx';
import './Calendar.css';

const events = [
    { name: 'Japanese N2 Class', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', teacher: 'Furukawa Kimiko', date: '2024-05-21', time: '10:00' },
    { name: 'Korean Level 3 Class', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', teacher: 'Seong Jaesang', date: '2024-05-21', time: '08:00' },
    { name: 'Korean Level 3 Class', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', teacher: 'Seong Jaesang', date: '2024-05-15', time: '08:00' },
    { name: 'Korean Level 3 Class', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', teacher: 'Seong Jaesang', date: '2024-05-08', time: '08:00' },
    { name: 'Korean Level 3 Class', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', teacher: 'Seong Jaesang', date: '2024-05-01', time: '08:00' },
    { name: 'Korean Level 3 Class', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', teacher: 'Seong Jaesang', date: '2024-05-29', time: '08:00' },
];

const Calendar = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    return (
        <div>
            <h1 className="calendar-name">Calendar</h1>
            <div>
                {<MonthlyCalendar year={currentYear} month={currentMonth} events={events} />}
            </div>
        </div>
    )
};

export default Calendar;