import L, { Map } from 'leaflet';

/* eslint-disable no-plusplus */
import { Event, EVENT_NAMES } from './event';

import { Projection, PROJECTION_NAMES } from './projection';

import { LayerTypes } from '../common/layers/layer';

import { MapViewer } from '../common/map-viewer';

import { Plugin } from './plugin';

/**
 * Class used to handle api calls (events, functions etc...)
 *
 * @export
 * @class API
 */
export class API {
    // event object used to handle triggering events, subscribing to an event etc...
    event: Event;

    // available event names
    eventNames = EVENT_NAMES;

    // project object used to handle transforming projects
    projection: Projection;

    // available projection names
    projectNames = PROJECTION_NAMES;

    // available layer types
    layerTypes = LayerTypes;

    // list of available maps
    maps: MapViewer[] = [];

    // set selected map instance / app
    selectedMapInstance!: MapViewer;

    // timeout number used to check if everything is ready to make API calls
    isReady = 0;

    // callback function to call after everything is ready
    readyCallback: () => void = () => undefined;

    // load plugins API
    plugin: Plugin;

    /**
     * Initiate the event and projection objects
     */
    constructor() {
        this.event = new Event();
        this.projection = new Projection();
        this.plugin = new Plugin();

        L.Map.addInitHook(function () {
            this.on('layeradd', (e) => {
                e.layer.on('data:loading', function () {});
            });
            this.on('layerremove', (e) => {});
        });
    }

    /**
     * Check if map rendering / drawing is ready then run the callback function
     * Timeout does not effect rendering speed, each map will cancel the previous timer after it renders
     * so timing of rendering will be based on device specs.
     *
     */
    ready = (): void => {
        // Clear our timeout throughout the event change
        window.clearTimeout(this.isReady);

        // Set a timeout to run after render ends
        // this will only be called after the last map renders so no delay in rendering and performance will happen
        this.isReady = window.setTimeout(() => {
            // Run the callback
            if (this.readyCallback) this.readyCallback();
        }, 1000);
    };

    /**
     * Get the instance of a map by it's ID to access API functions
     *
     * @param {string} id the map id
     *
     * @returns map api functions
     */
    map = (id: string): unknown => {
        for (let i = 0; i < this.maps.length; i++) {
            if (this.maps[i].id === id) {
                this.selectedMapInstance = this.maps[i];

                break;
            }
        }

        return {
            ...this.selectedMapInstance,
            ...this.selectedMapInstance.vector,
            ...this.selectedMapInstance.buttonPanel,
            ...this.selectedMapInstance.basemap,
            ...this.selectedMapInstance.layer,
        };
    };

    /**
     * Get the instance of a map by a leaflet instance to access API functions
     *
     * @param {Map} map the leaflet map instance
     *
     * @returns map api functions
     */
    mapInstance = (map: Map): unknown => {
        for (let i = 0; i < this.maps.length; i++) {
            if (this.maps[i].map === map) {
                this.selectedMapInstance = this.maps[i];

                break;
            }
        }

        return {
            ...this.selectedMapInstance,
            ...this.selectedMapInstance.vector,
            ...this.selectedMapInstance.buttonPanel,
            ...this.selectedMapInstance.basemap,
            ...this.selectedMapInstance.layer,
        };
    };

    SpinMapInitHook = function () {
        console.log('called');
        this.on(
            'layeradd',
            function (e) {
                // If added layer is currently loading, spin !
                if (e.layer.loading) console.log('loading');
                if (typeof e.layer.on !== 'function') return;
                e.layer.on(
                    'data:loading',
                    function () {
                        console.log('on loading');
                    },
                    this
                );
                e.layer.on(
                    'data:loaded',
                    function () {
                        console.log('on loaded');
                    },
                    this
                );
            },
            this
        );
        this.on(
            'layerremove',
            function (e) {
                // Clean-up
                if (e.layer.loading) console.log('cleaning');
                if (typeof e.layer.on !== 'function') return;
                e.layer.off('data:loaded');
                e.layer.off('data:loading');
            },
            this
        );
    };
}

export const api = new API();
