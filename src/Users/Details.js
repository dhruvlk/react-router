import React from 'react'
import { Link, Outlet } from "react-router-dom"

const Details = () => {
  return (
    <>
      <br />
      <br />
      <nav>
        <Link to="myList">My List</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="gallery">Gallery</Link>&nbsp;&nbsp;
      </nav>
      <p>
        This is Details Page
      </p>
      <Outlet />
    </>
  )
}

export default Details
