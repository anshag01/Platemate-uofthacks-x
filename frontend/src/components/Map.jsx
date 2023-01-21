import { useRef, useEffect } from 'react';

/**
 *
 * @param {Object} param0
 * @param {google.maps.LatLngLiteral} param0.center
 * @param {number} param0.zoom
 * @returns
 */
function MyMapComponent({ center, zoom }) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom
        });
    });

    return <div ref={ref} id="map" />;
}

export default MyMapComponent;
