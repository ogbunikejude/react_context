import {React, useContext} from 'react'
import { Context } from './Context';

function Posts() {
    const posts = useContext(Context)
    return (
        <div>
             {posts.map(post => (
              <div>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
              </div>  
            ))}
        </div>
    )
}

export default Posts
