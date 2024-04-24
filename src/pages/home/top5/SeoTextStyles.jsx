import styled from "styled-components";

export const SeoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1100px;
  p {
    font-size: 16px;
    ol {
      margin: 0;
    }
  }
  ol {
    margin: 0;
    li {
      margin: 0 0 4px 0;
    }
  }
  @media (max-width: 800px) {
    p {
      font-size: 14px;
    }
    ol {
      padding-left: 16px;
      li {
        font-size: 14px;
      }
    }
  }
`;
