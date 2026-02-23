import React from 'react'

export default function Box( { letter, color="" } ) {
  return (
    <div className={`guess-letter ${color}`}>
        { letter }
    </div>
  )
}
