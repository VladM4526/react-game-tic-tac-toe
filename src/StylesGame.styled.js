import styled from "styled-components";
import Modal from "react-modal";

export const GameFiledContainer = styled.div`
  margin-top: 55px;
`;

export const GmaeSpaceContainer = styled.div`
  width: 520px;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

export const TurnPlayer = styled.span`
  font-size: 48px;
  font-weight: 300;
  line-height: 1.25;
`;

export const GmaeSpaceList = styled.table`
  border-spacing: 20px 20px;
  margin: 0 auto;
`;

export const GmaeSpaceListItem = styled.tr``;

export const GameSpaceCell = styled.td`
  width: 100px;
  height: 100px;
  border: 5px solid #000;
  border-radius: 20px;
  font-size: 40px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

// modal window

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalWin = styled(Modal)`
  width: 608px;
  height: 616px;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
  transform: translateY(30%);
  overflow-y: hidden;
`;

export const ModalWinContainer = styled.div`
  padding: 24px;
`;

export const ModalWinSvgContainer = styled.div`
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 24px;
`;

export const ModalWinSvg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const ModalWinText = styled.p`
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.25;
  transform: translateY(400%);
`;
