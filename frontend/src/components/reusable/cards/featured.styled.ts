import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  & > span:before {
    content: ' ';

    display: block;
    border-left: 12px solid #000;
    border-top: 7.5px solid transparent;
    border-bottom: 7.5px solid transparent;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #c55656;
    font-family: Baloo Tammudu 2;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;

interface Props {
  $type?: 'small' | 'large' | 'banner';
  $imageUrl: string;
}

const FeaturedImageDisplayWrapper = styled.div<Props>`
  // min-height: 273px;
  // max-width: 283px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: grid;
  background: #f3f3f3;
  order: ${(props) =>
    props.$type === 'large' ? 1 : props.$type === 'banner' ? 2 : 5};

  & > div:first-of-type {
    width: 100%;
    grid-column: 1/-1;
    grid-row: 1/-1;
    align-self: self-end;
    justify-self: last baseline;
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    grid-row: 1/-1;
    grid-column: 1/-1;
  }

  & > div:nth-of-type(2) h3 {
    margin: 0;
    padding: 0;
  }

  ${(props) => {
    switch (props.$type) {
      case 'banner':
        return css`
          // max-width: 585px;
          // min-height: 264px;
          background: #512326;
          opacity: 0.99;
          overflow: hidden;
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            opacity: 0.1;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: -3;
            transform: rotate(30deg);
            transform-origin: left center;
            background: url(${props.$imageUrl}) no-repeat left center/ contain;
          }
          img {
            display: none;
          }
          & > div:first-of-type {
            max-width: 250px;
            min-height: 264px;
            position: relative;
            &:before {
              content: ' ';
              bottom: -10px;
              position: absolute;
              transform: rotate(-15deg);
              max-width: 250px;
              min-height: 264px;
              height: 100%;
              width: 100%;
              background: url(${props.$imageUrl}) no-repeat left center/ contain;
            }

            &:after {
              content: ' ';
              right: 270px;
              bottom: -50px;
              position: absolute;
              transform: rotate(15deg);
              max-width: 100px;
              min-height: 150px;
              height: 100%;
              width: 100%;
              background: url(${props.$imageUrl}) no-repeat left center/ contain;
            }
          }

          & > div:nth-of-type(2) {
            padding: 45px 12px;

            & > div:first-of-type {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              div {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }

              span {
                color: #fff;
                font-family: Baloo Tammudu 2;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%;
              }
              p {
                color: #fbfff9;
                font-family: Baloo Tammudu 2;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 110%;
              }

              h3 {
                color: #fff;
                font-family: Baloo Tammudu 2;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 120%;
              }
            }
          }

          a,
          button {
            display: none;
          }
        `;
      case 'large':
        return css`
          // min-height: 560.774px;
          // max-width: 574px;

          & > div:first-of-type {
            display: grid;
          }
          & img {
            width: 100%;
            margin: 0 0 0 auto;
            justify-self: stretch;
            object-fit: contain;
            max-width: 500px;
            max-height: 460px;
            aspect-ratio: 0.5;
          }
          @media (min-width: 1180px) {
            & img {
              margin: 0 auto;
            }
          }
          & > div:nth-of-type(2) {
            padding-left: 32px;
            padding-top: 32px;
            padding-bottom: 42px;

            div:first-of-type {
              display: flex;
              flex-direction: column;
              gap: 14px;

              div:nth-of-type(1) {
                gap: 2px;
              }

              div span {
                color: #767171;
                font-family: Baloo Tammudu 2;
                font-size: 20.8px;
                font-style: normal;
                font-weight: 400;
                line-height: 110%;
              }

              p {
                margin: 0;
                color: #51af25;
                font-family: Baloo Tammudu 2;
                font-size: 24.267px;
                font-style: normal;
                font-weight: 600;
                line-height: 110%;
              }
            }

            h3 {
              color: #000;
              font-family: Baloo Tammudu 2;
              font-size: 24.267px;
              font-style: normal;
              font-weight: 600;
              line-height: 110%;
            }
          }
        `;

      default:
        return css`
          a,
          button {
            display: none;
          }
          & > div:first-of-type {
            display: grid;
          }
          img {
            justify-self: stretch;
            object-fit: contain;
            max-width: 308px;
            max-height: 200px;
            aspect-ratio: 0.5;
          }

          @media (min-width: 1180px) {
            & img {
              margin: 0 auto;
              aspect-ratio: auto;
            }
          }
          & > div:nth-of-type(2) {
            padding-top: 22px;
            padding-left: 22px;

            div:first-of-type {
              display: flex;
              flex-direction: column;
              gap: 2px;

              h3 {
                color: #000;
                font-family: Baloo Tammudu 2;
                font-size: 12.133px;
                font-style: normal;
                font-weight: 600;
                line-height: 110%;
              }

              div span {
                color: #767171;
                font-family: Baloo Tammudu 2;
                font-size: 10.4px;
                font-style: normal;
                font-weight: 400;
                line-height: 110%; /* 11.44px */
              }

              p {
                margin: 0;
                color: #51af25;
                font-family: Baloo Tammudu 2;
                font-size: 12.133px;
                font-style: normal;
                font-weight: 600;
                line-height: 110%;
              }
            }

            div:nth-of-type(1) {
              gap: 7px;
            }
          }
        `;
    }
  }}
`;
export { Button, FeaturedImageDisplayWrapper };
