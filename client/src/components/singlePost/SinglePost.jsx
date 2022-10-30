import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
        <img
        src="https://images.pexels.com/photos/2748756/pexels-photo-2748756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className='singlePostImg'
        />
        <h1 className="singlePostTitle">
        What is Web development?
        <div className='singlePostEdit'>
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:<b>Ella</b></span>
            <span className="singlePostDate">1 hour ago</span>           
        </div>
        <p className="singlePostDesc">
        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).
        Web development can range from developing a simple single static page of plain text to complex web applications, 
        electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, 
        may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and 
        network security configuration, and e-commerce development.
        </p>
    </div>
  )
}
