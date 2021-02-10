import React, { useEffect, useState } from 'react';

const PanelContent = () => {
    const [vectors, setVectors] = useState([]);

    const { cgpv } = window;

    const addVector = (vector) => {
        setVectors([
            ...vectors,
            {
                id: vector.id,
                layer: vector.layer,
                type: vector.type,
                mapId: vector.handlerName,
            },
        ]);
    };

    const deleteVector = (id, mapId) => {
        cgpv.api.map(mapId).deleteGeometry(id);

        setVectors(
            vectors.filter((vector) => {
                return vector.id !== id;
            })
        );
    };

    useEffect(() => {
        cgpv.api.on('vector/added', (payload) => {
            addVector(payload);
        });

        // turn off event listeners on component unmounts
        return () => {
            cgpv.api.off('vector/added');
        };
    });

    return (
        <div>
            {vectors.map((vector) => {
                return (
                    <div key={vector.id}>
                        <p>Vector ID: {vector.id}</p>
                        <p>Vector Type: {vector.type}</p>
                        <button type="button" onClick={() => deleteVector(vector.id)}>
                            Delete vector
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PanelContent;
