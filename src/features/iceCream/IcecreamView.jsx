import React from 'react';
import { useSelector } from 'react-redux';

const IcecreamView = () => {
    const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams);
    return (
        <div>
            <h2>Number of icecreams - {numOfIceCreams}</h2>
            <button>Order icecream</button>
            <button>Restock icecreams</button>
        </div>
    );
};

export default IcecreamView;