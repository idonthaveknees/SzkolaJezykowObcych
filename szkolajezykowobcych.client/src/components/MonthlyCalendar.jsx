import Event from './Event.jsx';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const MonthlyCalendar = ({ year, month, events = [] }) => {
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 0).getDay();
    };

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyStartDays = Array.from({ length: firstDay }, () => null);
    var emptyEndDaysCount = 42 - (emptyStartDays.length + daysInMonth);

    if (emptyEndDaysCount > 7) {
        emptyEndDaysCount -= 7;
    }

    const emptyEndDays = Array.from({ length: emptyEndDaysCount }, () => null);

    const calendarDays = [...emptyStartDays, ...daysArray, ...emptyEndDays];

    const getEventsForDay = (day) => {
        if (!day) return [];
        const date = new Date(year, month, day + 1);
        const dateString = date.toISOString().split('T')[0];
        return events
            .filter(event => event.date === dateString)
            .sort((a, b) => {
                const timeA = new Date(`1970-01-01T${a.time}:00`);
                const timeB = new Date(`1970-01-01T${b.time}:00`);
                return timeA - timeB;
            });
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                {daysOfWeek.map((day) => (
                    <div key={day} className="calendar-header-day">
                        {day}
                    </div>
                ))}
            </div>
            <div className="calendar-body">
                {calendarDays.map((day, index) => (
                    <div key={index} className="calendar-day">
                        {day && (
                            <>
                                <div className="day-number">{day}</div>
                                <div className="event-container">
                                    {getEventsForDay(day).map((event, idx) => (
                                        <Event
                                            key={idx}
                                            name={event.name}
                                            date={event.date}
                                            time={event.time}
                                            description={event.description}
                                            teacher={event.teacher}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};