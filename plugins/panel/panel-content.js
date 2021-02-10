import React, { useState } from 'react';

const PanelContent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count is: {count}</p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Add count
            </button>
        </div>
    );
};

export default PanelContent;
