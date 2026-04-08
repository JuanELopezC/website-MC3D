import React, { useState } from "react";
import Calendar from "../Calendar.jsx";
import ImageCard from "../ImageCard.jsx";
import "./Events.css";
import "../PrintCard.jsx";
import PrintCard from "../PrintCard.jsx";
import Slideshow from "../slideshow.jsx";

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

const eventsRecap = [
  { 
    title: "3D Print Workshop", 
    author: "MC3D", 
    description: "a workshop held to introduce the basics of 3d printing and get students started on a new journey", 
    images: ["bradley.jpg", "firstworkshop.jpg", "kelvin.jpg"], 
    facts: ["10 participants", "2 hours"] 
  },
  {
    title: "Fidget Toys",
    author: "MC3D",
    description: "In partnership with the career center we have found and designed some 3D printer fidget toys found around campus",
    images: ["dinos.jpg", "keys.jpg"],
    facts: ["Flexy dinos", "infinite cubes", "flexy dragons"]
  },
  {
    title:"Casino Night",
    author: "MC3D, Scotslife, Math Club, CSC",
    description: "Las Vegas night style at Issac's!. over 100+ students joined us to play different Vegas style games winning many prices\
    up to a Nintendo Switch.",
    images: ["Blackjack!.jpg", "blackjack.jpg", "chancemic.jpg","crapstable.jpg","firstfloorpic.jpg","frontable.jpeg"],
    facts:["over 100+ students", "over 10+ faculty and staff", "5+ Vegas style games"]
  }

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


            {/*Upcoming Events*/}
      <section className="slideshow-section">
        <Slideshow 
        images= {[
          '/images/reveal.png',
          '/images/Roulette.png',
          
        ]}
        />

        
      </section>  

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
          <h2>Some of Our Events</h2>
          <div className="imagecards-grid">
            {eventsRecap.map((p,i) => <PrintCard key= {i} {...p}/>)}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Events;
