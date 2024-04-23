import styled from "styled-components";

export const SwiperHeroContainer = styled.div`
  display: flex;
  .swiper {
    height: auto;
    padding-bottom: 24px;
    .swiper-wrapper {
      .swiper-slide {
        display: flex;
        justify-content: center;
        user-select: none;
        img {
          height: auto;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #ff0000;
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: #ff0000;
      }
    }
  }
`;
