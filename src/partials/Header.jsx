import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="headerContainer">
      <ul className="headerNav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
