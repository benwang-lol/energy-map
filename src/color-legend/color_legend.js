import React from 'react';

const ColorBar = ({ colors, leftTitle, rightTitle }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, textAlign: 'center' }}>{leftTitle}</div>
            <div style={{
                    flex: 5,
                    backgroundColor: 'lightgray',
                    display: 'flex',
                    justifyContent: 'flex-start', // Change to 'flex-start' to arrange colors from left to right
            }}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: color,
                            flex: 1,
                            height: '50px',
                            border: '1px solid #ccc'
                        }}
                    />
                ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>{rightTitle}</div>
        </div>
    )
}

export default ColorBar;