import styled from "styled-components";

export const SwiperHeroContainer = styled.div`
  display: flex;
  .swiper {
    height: auto !important;
    padding-bottom: 24px;
    max-width: 1280px;
    .swiper-wrapper {
      a {
        display: flex;
        justify-content: center;
        user-select: none;
        width: 100%;
        height: 100%;
        .swiper-slide {
          display: flex;
          justify-content: center;
          user-select: none;
          img {
            height: auto;
          }
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #ff0000;
      background-color: #ffffff;
      padding: 4px;
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: #ff0000;
      }
    }
  }
  @media (max-width: 800px) {
    .swiper {
      margin-left: -8px;
      margin-right: -8px;
      width: calc(100% + 16px);
      .swiper-wrapper {
        .swiper-slide {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        height: auto;
        width: auto;
        padding: 8px;
        &::after {
          font-size: 28px;
        }
      }
    }
  }
`;
