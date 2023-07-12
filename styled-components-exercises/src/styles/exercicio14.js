/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const Item = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

function MasonryGrid({ links }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const createColumns = () => {
      const colRefs = Array.from({ length: 3 }, () => ({
        items: [],
        height: 0,
      }));

      links.forEach((link, index) => {
        const img = new Image();
        img.src = link;
        img.onload = () => {
          const shortestCol = colRefs.reduce((shortest, col) =>
            col.height < shortest.height ? col : shortest
          );
          shortestCol.items.push({ link, height: img.height });
          shortestCol.height += img.height;

          setColumns([...colRefs]);
        };
      });
    };

    createColumns();
  }, [links]);

  return (
    <Grid>
      {columns.map((col, colIndex) => (
        <Column key={colIndex}>
          {col.items.map((item, itemIndex) => (
            <Item key={itemIndex} style={{ height: item.height }}>
              <img src={item.link} alt={`Image ${colIndex}-${itemIndex}`} />
            </Item>
          ))}
        </Column>
      ))}
    </Grid>
  );
}

export default MasonryGrid;
