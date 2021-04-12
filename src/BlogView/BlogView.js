import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

function BlogView(props) {

//console.log(props.match.params.id);

const [blogForShow] = useState(props.dbBlogs.filter(blg => blg.id == props.match.params.id)[0])

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card mb-3 glavna m-4"  >
                        <div className="row g-0">
                            <div className='col-md-4'>
                                {/* slika */}
                                <p>{blogForShow.image}</p>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{blogForShow.naslov}</h5>
                                    <p className="card-text">{blogForShow.info}</p>
                                    <p className="card-text"><small className="text-muted float-right">{blogForShow.name}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(BlogView)