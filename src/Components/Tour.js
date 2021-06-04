import React from 'react'

const Tour = ({id, name, image, info, price}) => {
    return (
        <article>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h4>{ name }</h4>
                    <h4>{ price }</h4>
                </div>
                <p>{ info }</p>
            </footer>
        </article>
    )
}

export default Tour
