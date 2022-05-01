import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet"

export default function NewRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
        <Route path="/planet" element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

