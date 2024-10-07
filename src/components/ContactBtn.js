import React from "react";
import { Link } from "react-router-dom";

export default function ContactBtn() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/contact" className="contact_today">Contact us Today</Link>
    </div>
  );
}
