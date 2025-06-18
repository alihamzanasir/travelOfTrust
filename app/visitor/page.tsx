"use client";


import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {
  const [visitors, setVisitors] = useState<{ id: string; city: string }[]>([]);

  useEffect(() => {
    const storedId = localStorage.getItem('visitorId') || uuidv4();
    localStorage.setItem('visitorId', storedId); // store unique id per user

    const cookieCity = localStorage.getItem('city');

    if (cookieCity) {
      // Already stored
      sendVisitor(storedId, cookieCity);
    } else {
      // Fetch city via IP API
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          const city = data.city || 'Unknown City';
          localStorage.setItem('city', city);
          sendVisitor(storedId, city);
        });
    }

    // Fetch all visitors
    fetch('/api/visitors')
      .then(res => res.json())
      .then(data => setVisitors(data));
  }, []);

  const sendVisitor = (id: string, city: string) => {
    fetch('/api/visitors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, city }),
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Visitors in last 24 hours:</h1>
      {visitors.map((visitor, index) => (
        <p key={index}>
          Visitor ID: {visitor.id.slice(0, 8)} | City: {visitor.city}
        </p>
      ))}
    </div>
  );
}
