import React from "react";

function Restaurant(props) {

    const { cuisines, name, menu_url, featured_image, location, url } = props.restaurant

    console.log(props)
    let restImg = <img src='https://blog.pickyourtrail.com/wp-content/uploads/2018/02/home-panel-11-1-1-1200x500.jpg' alt='' width='100%' />
    if (featured_image !== '') {
        restImg = <img src={featured_image} alt={name} width='100%' />
    }
    return (
        <div className='restaurant'>
            {restImg}
            <div>
                <h1><a href={url}>{name}</a></h1>
                <h4>{cuisines}</h4>
                <h4><a href={menu_url}>Menu</a></h4>
                <address>{location.address}<br />{location.city}</address>
            </div>
        </div>
    )
}


export default Restaurant;