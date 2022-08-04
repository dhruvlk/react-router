import React from 'react'
import image from './01.jpeg'
import { Outlet } from "react-router-dom"

export const GalleryView = () => {
  return (
    <>
      <div>
        <br />
        <img src={image} style={{ width: '100px' }} />&nbsp;&nbsp;
        <img src={image} style={{ width: '100px' }} />&nbsp;&nbsp;
        <img src={image} style={{ width: '100px' }} />&nbsp;&nbsp;
      </div>
      <br />

      <Outlet />
    </>
  )
}
