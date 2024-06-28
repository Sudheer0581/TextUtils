import React from 'react'

function Alert(props) {
    const captilize=(word)=>{
        const x = word.toLowerCase();
        return x.charAt(0).toUpperCase()+x.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captilize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert