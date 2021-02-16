import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        },
    },
    thumbnail: {
        borderRadius: '5px 5px 0 0',
        height: '200px',
    },
    container: {
        background: 'rgba(0,0,0,.68)',
        color: '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '30px',
        padding: '16px 8px 16px 16px',
        display: 'flex',
        alignItems: 'center',
    },
}));

/**
 * Create a new basemap switcher component
 *
 * @param {*} props basemap switcher properties
 */
const BasemapSwitcher = (props) => {
    const [basemapList, setBasemapList] = useState([]);

    const classes = useStyles();

    const { t } = useTranslation();

    // get a reference to the viewer api
    const { cgpv } = window;

    // get the mapId passed in when loading the component
    const { mapId } = props;

    useEffect(() => {
        const { basemaps } = cgpv.api.map(mapId);

        setBasemapList(basemaps);

        // check if basemap with provded ID exists
        const exists = basemaps.filter((basemap) => basemap.id === 'testBasemap');

        // if basemap does not exist then create a new one
        if (exists.length === 0) {
            const basemap = {
                id: 'testBasemap',
                name: 'Test Basemap',
                description: 'Test basemap',
                descSummary: '',
                altText: '',
                thumbnailUrl: '',
                layers: {},
                attribution: 'test attribution',
                zoomLevels: {
                    min: 0,
                    max: 0,
                },
            };

            // create the basemap
            cgpv.api.map(mapId).createBasemap(basemap);
        }
    }, []);

    return (
        <div>
            {basemapList.map((basemap) => {
                return (
                    <div key={basemap.id}>
                        <div className={classes.card}>
                            <img src={basemap.thumbnailUrl} alt={basemap.altText} className={classes.thumbnail} />
                            <div className={classes.container}>{basemap.name}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BasemapSwitcher;
