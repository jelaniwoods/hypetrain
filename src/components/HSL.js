import React from 'react';

const HSL = ({ match }) => {
    const { params } = match
  
    return (
      <div style={{
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
        }}>
        hsl({params.h}, {params.s}%, {params.l}%)
      </div>
    )
  }

  let styles = {};
  
styles.hsl = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '40px',
    bottom: 0,
    color: 'black',
    paddingTop: '20px',
    fontSize: '30px',
}
  
  export default HSL;