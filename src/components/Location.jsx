import React from "react";
import { useLocation } from "react-router-dom";

export default function Location() {
  const location = useLocation();
  return <div data-testid="location-displayed">{location.pathname}</div>;
}
