import React from 'react'

function About({posts}) {
    return (
        <div>
            <p>this is about page</p>
            {posts.map(post => (
              <div>
                  <p>{post.title}</p>
                  <p>{post.userId}</p>
              </div>  
            ))}
        </div>
    )
}

export default About
