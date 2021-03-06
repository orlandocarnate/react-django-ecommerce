import React from 'react'

function Rating({ value, text, color }) {
    const ratings = [1, 2, 3, 4, 5]

    return (
        <div className='rating'>
            {ratings.map(rating =>

                <span key={rating}>
                    <i style={{ color }} className={
                        value >= rating
                            ? 'fas fa-star'
                            : value >= rating - 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }>

                    </i>
                </span>

            )}

            <span> {text && text}</span>

        </div>
    )
}

export default Rating
