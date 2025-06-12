import { useState } from 'react'

import './RatingStars.css'

const STAR_A = ''
const STAR_B = '★'

const STAR_TYPE = {
  A: {
    class: 'star hover',
    type: '★',
  },
  B: {
    class: 'star active',
    type: '★',
  },
  C: {
    class: 'star inactive',
    type: '☆',
  },
}

const MAX_STARS = 5

function RatingStars({ initialValue = 0 }) {
  const [hoveredStars, setHoveredStars] = useState(0)
  const [activeStars, setActiveStars] = useState(0)

  const starArray = []

  for (let i = 0; i < MAX_STARS; i++) {
    if (i < hoveredStars) {
      starArray[i] = 'A'
    } else if (i < activeStars) {
      starArray[i] = 'B'
    } else {
      starArray[i] = 'C'
    }
  }

  const handleHover = (index) => {
    setHoveredStars(index + 1)
  }

  const handleClick = (index) => {
    setActiveStars(index + 1)
  }

  console.log(starArray)

  return (
    <div className="stars" onMouseLeave={() => setHoveredStars(0)}>
      {starArray.map((star, index) => {
        return (
          <div
            className={STAR_TYPE[star].class}
            key={index}
            onMouseOver={() => handleHover(index)}
            onClick={() => handleClick(index)}
          >
            {STAR_TYPE[star].type}
          </div>
        )
      })}
    </div>
  )
}

export default RatingStars
