import React from 'react'
// import { Link } from 'react-router-dom'
import './Posts.css'

function Posts({ post }) {
    
    // const cities = service.cities ? service.cities.map((city, idx) =>
    //     <span key={city.value}>&nbsp;&nbsp;{idx !== 0 ? '•' : ''}&nbsp;&nbsp;{city.label}</span>) : <span></span>
    
    return (
        <>
            {/* <Link 
                to={{
                    pathname: '/servicedetail',
                    state: { service }
                }}
            > */}
                <div className='serviceflooritem'>
                    <div>
                        {/* <div className='serviceflooritem-detail-location'>
                            <p className="location">{cities}</p>
                        </div> */}
                        <div className='serviceflooritem-detail-name'>
                            <p className='post-component'>{post}</p>
                            <p className='name'>post</p>
                        </div>
                      
                    </div>
                </div>
            {/* </Link> */}
        </>
    )
}

export default Posts