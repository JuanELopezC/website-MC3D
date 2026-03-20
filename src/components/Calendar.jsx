import React, { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs } from "react-icons/fa"; //ICON

function Calendar({ events, onDateSelect }) {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEventsForDate = (date) =>
    events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );

  const handleDateClick = (clickedDate) => {
    setDate(clickedDate);
    const evs = getEventsForDate(clickedDate);
    setSelectedEvent(evs.length > 0 ? evs : null);
    if (onDateSelect) {
      onDateSelect(clickedDate, evs);
    }
  };

  useEffect(() => {
    const evs = getEventsForDate(date);
    setSelectedEvent(evs.length > 0 ? evs : null);
  }, [date, events]);

  return (
    <div className="calendar-component">
      <motion.div
        className="calendar-wrapper"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ReactCalendar
          onChange={handleDateClick}
          value={date}
          className="custom-calendar"
          tileClassName={({ date: tileDate }) =>
            getEventsForDate(tileDate).length > 0 ? "event-day" : null
          }
        />
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="event-popup"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaCogs
              style={{
                color: "#ff9800",
                fontSize: "2rem",
                marginBottom: "10px",
                animation: "spin 6s linear infinite",
              }}
            />
            {selectedEvent.map((ev, idx) => (
              <div key={idx} className="event-item">
                <h3>🎉 {ev.title}</h3>
                <p>{ev.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Calendar;
