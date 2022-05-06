import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet"
import NotFoundScreen from "./screens/notFound";

export default function NewRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
        <Route path="/planet/:id" element={<PlanetScreen />} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

