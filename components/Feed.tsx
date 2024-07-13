import React from 'react'
import PostInput from './custom ui/PostInput'
import Posts from './custom ui/Posts'
import { getAllPosts } from '@/lib/serveractions'

const Feed = async ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user))
  const posts = await getAllPosts()
  return (
    <div className='flex-1'>
      <PostInput user={user} />
      {/* <Posts posts={posts!} /> */}
    </div>
  )
}

export default Feed
