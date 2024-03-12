import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="md:w-2/3">
            <h4>Blogs {blogs.length}</h4>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;