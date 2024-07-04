import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Link to="/"> #VANLIFE</Link>

        <nav>
            <Link to="/about">About</Link>
        </nav>
    </div>
  )
}
