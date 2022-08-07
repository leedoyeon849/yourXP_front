import styled, { keyframes } from "styled-components";

import bannerImg from "./img/main-banner-image.png";

// animation define

const buttonUp = keyframes`
  0% {
    background: rgba(67, 159, 104, 0.6);
    position: relative;
    top: 0px;
    left: 0px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.0);
  }
  100% {
    background: rgba(67, 159, 104, 1);
    position: relative;
    top: -5px;
    left: -5px;
    box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.15);
  }
`;
const buttonDown = keyframes`
  0% {
    background: rgba(67, 159, 104, 1);
    position: relative;
    top: -5px;
    left: -5px;
    box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.15);
  }
  100% {
    background: rgba(67, 159, 104, 0.6);
    position: relative;
    top: 0px;
    left: 0px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.0);
  }
`;

const inputUp = keyframes`
  0% {
    position: relative;
    top: 0px;
    left: 0px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.0);
  }
  100% {
    position: relative;
    top: -5px;
    left: -5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.15);
  }
`;
const inputDown = keyframes`
  0% {
    position: relative;
    top: -5px;
    left: -5px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.15);
  }
  100% {
    position: relative;
    top: 0px;
    left: 0px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.0);
  }
`;

//main page
export const Banner = styled.div`
  width: 100vw;
  height: 720px;
  background-image: url("${bannerImg}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.h1`
  padding: 150px 120px;
`;

export const BannerTitle = styled.div`
  display: flex;
`;

export const BannerTitleText = styled.h1`
  font-family: "Noto Sans KR";
  font-size: 50px;
  color: white;
  padding-right: 15px;
  margin: 0;
`;

export const BannerTitleTextGreen = styled.h1`
  font-size: 50px;
  color: #5cbe81;
  margin: 0;
`;

export const BannerBodyText = styled.p`
  margin: 15px 0 0 0;
  font-size: 16px;
  color: white;
  font-weight: 400;
`;

export const BannerInput = styled.textarea`
  margin-top: 25px;
  width: 520px;
  height: 180px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #439f68;
  color: white;
  font-weight: 400;
  padding: 20px;
  resize: none;
  animation: ${inputDown} 0.3s ease-in-out forwards;

  &:focus {
    outline: none; // 활성화 효과 빼기
    animation: ${inputUp} 0.3s ease-in-out forwards;
  }

  &::-webkit-input-placeholder {
    color: #c6c6c6;
  }
`;

export const BannerButton = styled.button`
  font-family: "Noto Sans KR";
  margin-top: 25px;
  display: block;
  background: rgba(67, 159, 104, 0.6);
  border-radius: 10px;
  color: white;
  padding: 15px 20px;
  border: 0px solid #439f68;
  font-size: 16px;
  font-weight: 500;
  animation: ${buttonDown} 0.3s ease-in-out forwards;

  &:hover {
    animation: ${buttonUp} 0.3s ease-in-out forwards;
    cursor: pointer;
  }
`;