import React from 'react'
import { Link, Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <Link to="/users">Users</Link>&nbsp;&nbsp;
        <Link to="/blogs">Blogs</Link>&nbsp;&nbsp;
        <Link to="/posts">Posts</Link>&nbsp;&nbsp;
        <Link to="/login">Login</Link>&nbsp;&nbsp;
      </nav>
      <Outlet />
    </>
  )
}

export default Home
