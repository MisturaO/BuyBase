import styled from 'styled-components';

const FeaturedSectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
  gap: 20px;

  & > div.large {
    width: 100%;
    height: 100%;
    grid-column: 1/-1;
    grid-row: 1/3;
    order: 1;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; // six columns
    & > div.large {
      width: 100%;
      height: 100%;
      grid-column: 1/5;
      grid-row: 1/-1;
      order: 1;
    }

    & > div.banner {
      width: 100%;
      height: 100%;
      grid-column: 1/5;
      grid-row: 3/-1;
      order: 3;
    }

    & > div.small:nth-of-type(3) {
      width: 100%;
      height: 100%;
      grid-column: 5/-1;
      grid-row: 1/2;
      order: 2;
    }

    & > div.small:nth-of-type(4) {
      width: 100%;
      height: 100%;
      grid-column: 5/-1;
      grid-row: 2/-1;
      order: 4;
    }
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr; //4 columns
    max-height: 560.774px;
    grid-template-rows: 1fr 1fr;

    & > div.large {
      width: 100%;
      height: 100%;
      grid-column: 1/3;
      grid-row: 1/-1;
      order: 1;
    }
    & > div.banner {
      width: 100%;
      height: 100%;
      grid-column: 3/-1;
      grid-row: 1/2;
      order: 2;
    }

    & > div.small:nth-of-type(3) {
      width: 100%;
      height: 100%;
      grid-column: 3/4;
      grid-row: 2/-1;
      order: 3;
    }
    & > div.small:nth-of-type(4) {
      width: 100%;
      height: 100%;
      grid-column: 4/-1;
      grid-row: 2/-1;
      order: 4;
    }
  }
`;

export { FeaturedSectionWrapper };
