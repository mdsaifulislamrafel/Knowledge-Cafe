import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [redingTime, setRedingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = time => {
    const newReadingTime = redingTime + time;
    setRedingTime(newReadingTime);
  };
  return (
    <>
      <Header></Header>
      <div className='md:flex md:gap-8 max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
