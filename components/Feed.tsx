import React from 'react'
import PostInput from './custom ui/PostInput'
import Posts from './custom ui/Posts'

const Feed = ({ user }: { user: any }) => {
  return (
    <div className='flex-1'>
      <PostInput user={user} />
      <Posts />
    </div>
  )
}

export default Feed
