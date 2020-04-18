import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import 'react-leaflet-markercluster/dist/styles.min.css';

const StyledMap = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;

const Map = ({ items }) => {
  const ref = useRef();
  if (typeof window !== 'undefined') {
    const group = new L.featureGroup(
      items.map((x) => L.marker([x.lat, x.lng]))
    );
    useEffect(() => {
      ref.current.leafletElement.fitBounds(group.getBounds().pad(0.5));
    }, []);
  }
  return (
    typeof window !== 'undefined' && (
      <StyledMap>
        <LeafletMap ref={ref} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup>
            {items
              .filter((x) => x.lat && x.lng)
              .map((x, idx) => (
                <Marker key={idx} position={[x.lat, x.lng]}>
                  <Popup>
                    <GatsbyImage fixed={x.image} alt={x.name} />
                    <br />
                    {x.name}
                    <br />
                    <a
                      href={x.url}
                      target={'_blank'}
                      rel={'noopener noreferrer'}
                    >
                      {x.url}
                    </a>
                  </Popup>
                </Marker>
              ))}
          </MarkerClusterGroup>
        </LeafletMap>
      </StyledMap>
    )
  );
};

Map.propTypes = {
  items: PropTypes.array,
};

export default Map;
