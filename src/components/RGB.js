import React, {Component} from 'react';

const RGB = ({ match }) => {
    const { params } = match
  
    return (
      <div style={{
        ...styles.rgb,
        background: `rgb(${params.r}, ${params.g}, ${params.b})`
        }}>rgb({params.r}, {params.g}, {params.b})
      </div>
    )
  }

  export default RGB;