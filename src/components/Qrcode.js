import React from 'react'

function Qrcode(props) {
    let content = {
        width : '15%',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '10px'
    }

    let img = {
        width: '100%',
        borderRadius: '10px'
    }
  return (
    <div style={content}>
      <img src={props.image} alt="QR code" style={img} />
      {props.children}
    </div>
  )
}

export default Qrcode
