

import "./index.css"

function BlogItems(props){
    const {eachBlog} = props
    const {avatarUrl,name,starsCount,forksCount,issuesCount} = eachBlog
    return(
        <li className="list_items">
            <img className="image" src={avatarUrl} alt={name}/>
            <h1 className="name">{name}</h1>
            <div className="items_set">
            <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" className="star_image" alt="stars"/>
            <p className="para">{starsCount} stars</p>
            </div>
            <div className="items_set">
            <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" className="star_image" alt="forks"/>
            <p className="para">{forksCount} forks</p>
            </div>
            <div className="items_set">
            <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" className="star_image" alt="open issues"/>
            <p className="para">{issuesCount} open issues</p>
            </div>
        </li>
    )
}

export default BlogItems