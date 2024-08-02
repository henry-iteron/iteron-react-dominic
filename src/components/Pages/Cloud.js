import React from 'react'
import "./Cloud.css";
import { Link } from 'react-router-dom';

export default function Cloud() {
  return (
    <>
      <div className="pagetop">
        <div className="title-container">
          <h1>
            Cloud Consulting | Cloud Migration |
            Cloud Security | Cloud Support
          </h1>
          <ul className="shortcut">
            <li>
              <Link className="hyper" to="/">
                Home
              </Link>
            </li>
            <li>Cloud services</li>
          </ul>
        </div>
      </div>
    </>
  )
}

