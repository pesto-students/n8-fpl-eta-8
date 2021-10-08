import styled from "styled-components";

export const HeaderContainer = styled.div`
  text-align: left;
  padding: 10px;

  @media (min-width: 1024px) {
    text-align: center;
    padding-top: 154px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 64px;
  color: #5d5fef;
  padding-left: 10px;
  display: inline-block;
  vertical-align: top;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 82px;
    padding-left: 14px;
  }
`;

export const Logo = styled.img`
  width: 38px;
  height: 38px;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;