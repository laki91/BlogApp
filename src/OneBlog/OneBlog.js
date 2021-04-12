import React from 'react'
import { Link } from 'react-router-dom'
import './OneBlog.css'

export default function OneBlog({ blog }) {
    

    return (
        <div className="card mb-3 glavna "  >
            <div className="row g-0">
                <div className='col-md-4 '>
                    {/* slika */}
                    <div id='slika'>{blog.image}</div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-1">{blog.naslov}</h5>
                        <p className="card-text">{blog.info.substr(0,200)}...</p>
                        <div className="row">
                            <div className="col">
                                <p className="card-text"><small className="text-muted float-left m-1">{blog.name}</small></p>
                            </div>
                            <div className="col">
                                <Link to={'/blog/'+ blog.id} className='btn btn-sm btn-info float-right '>Read More</Link>
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    )
}
