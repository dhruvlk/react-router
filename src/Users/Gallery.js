import React from 'react'
import image from './01.jpeg'
import { Link, Outlet } from "react-router-dom"


export const Gallery = () => {
  return (
    <>
      <div>
        <img src={image} style={{ width: '500px' }} />
      </div>
      <br />

      <nav>
        <Link to="UserList">User List</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="galleryView">Gallery View</Link>&nbsp;&nbsp;
      </nav>

      <Outlet />
    </>
  )
}
