import React from 'react'
import { Link, Outlet } from "react-router-dom"


const Users = () => {
  return (
    <>
      <br /><br /><br />
      <h3>Hello Users</h3>
      <Link to="/users/list">List</Link>&nbsp;&nbsp;
      <Link to="/users/save">Save</Link>&nbsp;&nbsp;
      <Link to="/users/details">Details</Link>&nbsp;&nbsp;

      <Outlet />
    </>
  )
}

export default Users
