import styled from 'styled-components';

const ProductItemsWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: row;
  gap: 12px;

  & > section.featured {
    grid-column: 1/-1;
    margin: 25px 0 25px 0;
    padding-bottom: 15px;
  }
`;

export { ProductItemsWrapper };
