import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useTranslation, getInitialProps } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        },
        marginBottom: 10,
        height: '120px',
        width: '100%',
        display: 'block',
        position: 'relative',
    },
    thumbnail: {
        position: 'absolute',
        height: 'inherit',
        width: 'inherit',
    },
    container: {
        background: 'rgba(0,0,0,.68)',
        color: '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '5px',
        padding: '16px 8px 16px 16px',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 'inherit',
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

    // get the mapId and language passed in when loading the component
    const { mapId, language } = props;
    console.log('here');

    const createBasemap = (id, basemapProps) => {
        // check if basemap with provded ID exists
        const exists = basemapList.filter((basemap) => basemap.id === id);

        // if basemap does not exist then create a new one
        if (exists.length === 0) {
            const basemap = { ...basemapProps, id };

            // create the basemap
            cgpv.api.map(mapId).createBasemap(basemap);
        }
    };

    const setBasemap = (id) => {
        cgpv.api.map(mapId).setBasemap(id);
    };

    useEffect(() => {
        const { basemaps } = cgpv.api.map(mapId);

        setBasemapList(basemaps);

        createBasemap('transportWithLabels', {
            name: 'Transport with Labels',
            description:
                'This Canadian basemap provides geographic context with bilingual labels and an emphasis on transportation networks. From Natural Resources Canada.',
            descSummary: '',
            altText: 'Transport with labels',
            thumbnailUrl: '',
            layers: [
                {
                    id: 'transport',
                    type: 'transport',
                    url:
                        'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg',
                    opacity: 1,
                },
                {
                    id: 'label',
                    layerType: 'label',
                    url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/xxxx_TXT_3978/MapServer/WMTS/tile/1.0.0/xxxx_TXT_3978/default/default028mm/{z}/{y}/{x}.jpg'.replaceAll(
                        'xxxx',
                        language === 'en-CA' ? 'CBMT' : 'CBCT'
                    ),
                    opacity: 0.75,
                },
            ],
            attribution: 'test attribution',
            zoomLevels: {
                min: 0,
                max: 0,
            },
        });

        createBasemap('transportWithNoLabels', {
            name: 'Transport without labels',
            description:
                'This Canadian basemap provides geographic context that emphasis on transportation networks. From Natural Resources Canada.',
            descSummary: '',
            altText: 'Transport without labels',
            thumbnailUrl: '',
            layers: [
                {
                    id: 'transport',
                    type: 'transport',
                    url:
                        'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/CBMT_CBCT_GEOM_3978/default/default028mm/{z}/{y}/{x}.jpg',
                    opacity: 1,
                },
            ],
            attribution: 'test attribution',
            zoomLevels: {
                min: 0,
                max: 0,
            },
        });
    }, []);

    return (
        <div>
            {basemapList.map((basemap) => {
                return (
                    <div
                        role="button"
                        tabIndex="0"
                        className={classes.card}
                        onClick={() => setBasemap(basemap.id)}
                        onKeyPress={() => setBasemap(basemap.id)}
                        key={basemap.id}
                    >
                        {typeof basemap.thumbnailUrl === 'string' && (
                            <img src={basemap.thumbnailUrl} alt={basemap.altText} className={classes.thumbnail} />
                        )}

                        {Array.isArray(basemap.thumbnailUrl) &&
                            basemap.thumbnailUrl.map((thumbnail) => {
                                return <img src={thumbnail} alt={basemap.altText} className={classes.thumbnail} />;
                            })}

                        <div className={classes.container}>{basemap.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default BasemapSwitcher;
