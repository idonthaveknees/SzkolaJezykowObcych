import { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    return `${hour}:${minutes} ${suffix}`
}

const EventCard = ({ name, description, teacher, date, time }) => {
    return (
        <Card className="event-card">
            <Card.Title className="event-card-name">{name}</Card.Title>
            <Card.Text className="event-card-description">{description}</Card.Text>
            <Card.Text className="event-card-teacher"><strong>Teacher:</strong> {teacher}</Card.Text>
            <Card.Text className="event-card-datetime"><strong>Date:</strong> {date} <strong>Time:</strong> {formatTime(time)}</Card.Text>
        </Card>
    );
};

const Event = ({ name, description, teacher, date, time }) => {
    const [showEventCard, setShowEventCard] = useState(false);

    return (
        <div className="event" onMouseEnter={() => setShowEventCard(true)} onMouseLeave={() => setShowEventCard(false)}>
            <div className="event-name">{name}</div>
            {showEventCard && (
                <div className="event-card-container">
                    <EventCard
                        name={name}
                        description={description}
                        teacher={teacher}
                        date={date}
                        time={time}
                    />
                </div>
            )}
        </div>
    );
};

EventCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Event;