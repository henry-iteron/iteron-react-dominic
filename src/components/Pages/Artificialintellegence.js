import React from 'react'
import "./Artificialintellegence.css"
import { Link } from 'react-router-dom'


export default function Artificialintellegence() {
  return (
    <div className="pagetop-AI">
    <div className="title-container">
      <h1>
        AI offerings - machine learning, deep learning,NLP, Image recognition and Computer vision
      </h1>
      <ul className="shortcut">
        <li>
          <Link className="hyper" to="/">
            Home
          </Link>
        </li>
        <li>Artificialintellegence</li>
      </ul>
    </div>
  </div>


    
  )
}
