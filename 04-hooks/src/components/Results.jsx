import React from 'react'
import PropTypes from 'prop-types'

const Results = ({operacion, calculo}) => {
  return (
      <div>
          <br />
          <span>{operacion}: { calculo }</span>
    </div>
  )
}

Results.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Results