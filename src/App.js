import { Routes, Route } from "react-router-dom"
import About from "./About"
import Blogs from "./Blogs"
import Contact from "./Contact/index"
import Home from "./Home"
import HomePage from "./HomePage"
import Posts from "./Post"
import Users from "./Users"
import Details from "./Users/Details"
import List from "./Users/List"
import { NewList } from "./Users/NewList"
import { Gallery } from "./Users/Gallery"
import { GalleryView } from "./Users/GalleryView"

import Save from "./Users/Save"
import { UserList } from "./Users/UserList"
import { BlogList } from "./Blogs/BlogList"
import { Description } from "./Blogs/Description"
import ProductDisplay from "./Blogs/ProductDisplay"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route index element={<List />} />
            <Route path="save" element={<Save />} />
            <Route path="details" element={<Details />}>
              <Route path="myList" element={<NewList />} />
              <Route path="gallery" element={<Gallery />}>
                <Route path="userList" element={<UserList />} />
                <Route path="galleryView" element={<GalleryView />} />
              </Route>
            </Route>
          </Route>
          <Route path="blogs" element={<Blogs />}>
            <Route path="blogList" element={<BlogList />} />
            <Route path="blogList/:id" element={<ProductDisplay />} />
            <Route path="description" element={<Description />} />
          </Route>
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
