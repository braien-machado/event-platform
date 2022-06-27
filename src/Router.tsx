import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Subscribe from './pages/Subscribe';

const DEFAULT_SLUG = 'popular-monster';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Navigate to={`/event/lesson/${DEFAULT_SLUG}`} />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
