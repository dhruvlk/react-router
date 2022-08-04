import React from 'react'
import { Link, Outlet } from "react-router-dom"

const Blogs = () => {
  return (
    <>
      <h3>Hello Blogs</h3>

      <nav>
        <Link to="/blogs/blogList">User List</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/blogs/description">Description</Link>&nbsp;&nbsp;
      </nav>

      <Outlet />
    </>
  )
}

export default Blogs
