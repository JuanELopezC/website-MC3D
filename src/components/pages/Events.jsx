import React, { useState } from "react";
import Calendar from "../Calendar.jsx";
import ImageCard from "../ImageCard.jsx";
import "./Events.css";

const Events = () => {
  const events = [
    {
      date: new Date(2025, 8, 15),
      title: "3D Printing Workshop",
      description:
        "Learn the basics of 3D modeling and printing with hands-on demos!",
    },
    {
      date: new Date(2025, 11, 20),
      title: "Outreach Event",
      description:
        "Come with us to show some cool 3D prints to middle and high school students",
    },
    {
      date: new Date(2025, 10, 23),
      title: "Laser Cut Training",
      description: "Burn a hot dog in the laser cut",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todayEvents, setTodayEvents] = useState([]);

  const handleDateSelect = (date, evs) => {
    setSelectedDate(date);
    setTodayEvents(evs);
  };

  const formatDate = (date) =>
    date.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="events-page">
      <h1 className="events-title">Club Events</h1>

      <div className="events-layout">
        {/* Calendar Section + Events Today */}
        <div className="calendar-section">
          <Calendar events={events} onDateSelect={handleDateSelect} />

          {/* Events Today box */}
          <div className="events-today">
            <h2>Events on {formatDate(selectedDate)}</h2>
            {todayEvents && todayEvents.length > 0 ? (
              <div className="events-list">
                {todayEvents.map((ev, idx) => (
                  <div key={idx} className="today-event">
                    <h3>{ev.title}</h3>
                    <p>{ev.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-events">No events today but come by our
               makerspace to print something</p>
            )}
          </div>
        </div>

        {/* Past Highlights Section */}
        <div className="imagecards-section">
          <h2>Past Highlights</h2>
          <div className="imagecards-grid">
            <ImageCard picture="braxtonfall.jpg" text="Face of the Club" height="220px" />
            <ImageCard picture="rocks.jpg" text="Covenant Stone" height="220px" />
            <ImageCard picture="trophy.jpg" text="3D Trophy and Helment" height="220px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
