import React from 'react';

const inputComponent = ({onsend, value}) => (
        <div>
            <input type="text" value="" />
            <button onClick={onsend({types: 'SEND', value })}>send</button>
            ${value}
        </div>
)
export default inputComponent;