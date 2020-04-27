import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Item from './Item';

const StyledGrid = styled.section`
  margin: 3rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const Grid = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <StyledGrid>
        {items.map((x, idx) => (
          <div key={idx}>
            <Item {...x} even={!!(idx % 2)} onClick={() => openLightbox(idx)} />
          </div>
        ))}
      </StyledGrid>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.map(({ full, title }) => ({
                caption: title || '',
                source: full.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

Grid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.object.isRequired,
      full: PropTypes.object.isRequired,
      title: PropTypes.string,
    })
  ),
};

export default Grid;

