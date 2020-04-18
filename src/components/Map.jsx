import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import L from 'leaflet';
import GatsbyImage from 'gatsby-image';

const StyledMap = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;

const Map = ({ items }) => {
  const ref = useRef();
  const group = new L.featureGroup(items.map((x) => L.marker([x.lat, x.lng])));
  useEffect(() => {
    ref.current.leafletElement.fitBounds(group.getBounds().pad(0.5));
  }, []);
  return (
    typeof window !== 'undefined' && (
      <StyledMap>
        <LeafletMap ref={ref} dragging={!L.Browser.mobile}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {items
            .filter((x) => x.lat && x.lng)
            .map((x, idx) => (
              <Marker key={idx} position={[x.lat, x.lng]}>
                <Popup>
                  <GatsbyImage fixed={x.image} alt={x.name} />
                  <br />
                  {x.name}
                  <br />
                  <a href={x.url} target={'_blank'} rel={'noopener noreferrer'}>
                    {x.url}
                  </a>
                </Popup>
              </Marker>
            ))}
        </LeafletMap>
      </StyledMap>
    )
  );
};

Map.propTypes = {
  items: PropTypes.array,
};

export default Map;
