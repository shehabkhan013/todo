import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header w-full bg-black py-3">
        <div className="container flex justify-between items-center">
            <div className="logo"><h4 className='text-white font-mono text-lg font-bold'><Link to="/">TODO</Link></h4></div>
            <div className="menu flex gap-4 items-center">
                <Link to="/" className="text-white font-mono text-lg font-bold">Home</Link>
                <Link to="/notes" className="text-white font-mono text-lg font-bold">Notes</Link>
                <Link to="/" className="text-white font-mono text-lg font-bold">Conatct</Link>
            </div>
        </div>
    </div>
  )
}

export default Header