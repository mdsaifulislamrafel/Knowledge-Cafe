import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, redingTime }) => {
    return (

        <div className="md:w-1/3 ">
            <h1 className='text-center text-purple-700 text-3xl font-bold bg-[#efedfd] p-5 my-5 rounded-sm'>Spent time on read : {redingTime} min</h1>
            <div className='bg-[#f3f3f3] p-8'>
                <h2 className='text-3xl'>Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    redingTime: PropTypes.number
}
export default Bookmarks;