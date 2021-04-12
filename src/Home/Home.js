import React from 'react'
import OneBlog from '../OneBlog/OneBlog'
import './Home.css'

export default function Home({dbBlogs, showBlog}) {

    const allBlogs = dbBlogs.map(blog => {
        return (
            <OneBlog blog={blog} key={blog.id} />
        )
    })

    //console.log(blogs);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-0">
                    <h3 className='display-4 m-4'>Blog</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div>
                                {allBlogs}
                            </div>
                        </div>                                                                     
                    </div>
                </div>
            </div>
        </div>
    )
}
