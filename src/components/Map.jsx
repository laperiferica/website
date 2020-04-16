import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
// import L from 'leaflet';

const StyledMap = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;

const Map = ({ items }) =>
  typeof window !== 'undefined' && (
    <StyledMap>
      <LeafletMap center={[40.463669, -3.74922]} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {items
          .filter((x) => x.lat && x.lng)
          .map((x, idx) => (
            <Marker
              key={idx}
              position={[x.lat, x.lng]}
              // icon={L.icon({
              //   iconUrl: 'x.image.src',
              //   iconSize: [32, 32],
              // })}
            >
              {console.log(x.image)}
              <Popup>
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
  );

Map.propTypes = {
  items: PropTypes.array,
};

export default Map;
