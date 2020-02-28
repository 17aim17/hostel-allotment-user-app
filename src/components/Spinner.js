import React from 'react'

const Spinner = () => {
    const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    }
    return (
        <div style={style}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner