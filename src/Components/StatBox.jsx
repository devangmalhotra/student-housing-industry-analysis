import React from 'react'
import PropTypes from 'prop-types'

function StatBox(props) {
  return (
    <div className='stat-container'>
        <h4>{props.val}</h4>
        <p>{props.statName}</p>
    </div>
  )
}

StatBox.propTypes = {
    statName: PropTypes.string
};

export default StatBox
