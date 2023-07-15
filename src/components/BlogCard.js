import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='card-image'>
                        <img src="images/blog-1.jpg" alt="blog" className='img-fluid' />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>26 March, 2023</p>
                        <h5 className='title'>A beautiful sunday morning renaissance </h5>
                        <p className='desc'> The Prototype Specification is developed prior to development of the first iteration of a given prototy</p>
                        <Link className="button" to=''>READ MORE</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard