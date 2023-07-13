/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const Layout = styled.div`
  img {
    width: 32vw;
  }
  margin: 0px 10px;
  max-width: 100vw;
  .my-masonry-grid {
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    width: 10px;
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    width: 33.33%;
    background: grey;
    margin-bottom: 30px;
  }
`;

function MasonryGrid({ links }) {
  return (
    <Layout>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {links.map((item) => (
          <img src={item} alt="teste" />
        ))}
      </Masonry>
    </Layout>
  );
}

export default MasonryGrid;
