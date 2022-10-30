import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src="https://images.pexels.com/photos/2748756/pexels-photo-2748756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">This Is Title</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p>Here is description part about this great article.</p>
    </div>
  )
}
