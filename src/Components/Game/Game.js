import { useEffect, useState } from "react";
import {
  GameFiledContainer,
  GameSpaceCell,
  GmaeSpaceContainer,
  GmaeSpaceList,
  GmaeSpaceListItem,
  ModalContainer,
  ModalWin,
  ModalWinContainer,
  ModalWinSvg,
  ModalWinSvgContainer,
  ModalWinText,
  TurnPlayer,
} from "../../StylesGame.styled";
import SetIcons from "../../img/close-icons.svg";

export const Game = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [turnPlayer, setTurnPlayer] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [isDraw, setIsDraw] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflowY = "scroll";
  };

  const checkWinner = (arr) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((gameStatus) => {
        if (
          arr[gameStatus[0]] !== "" &&
          arr[gameStatus[0]] === arr[gameStatus[1]] &&
          arr[gameStatus[1]] === arr[gameStatus[2]]
        ) {
          setWinner(arr[gameStatus[0]]);
          openModal();
        } else {
        }
      });
    }
    if (!arr.includes("") && !winner) {
      setIsDraw(true);
      openModal();
    }
  };

  const handleClick = (num) => {
    if (winner || cells[num] !== "") return;

    let arr = [...cells];
    if (turnPlayer === "X") {
      arr[num] = "X";
      setTurnPlayer("O");
    } else {
      arr[num] = "O";
      setTurnPlayer("X");
    }
    checkWinner(arr);
    setCells(arr);
  };

  const handleReset = () => {
    setWinner();
    setIsDraw(false);
    setCells(Array(9).fill(""));
  };

  useEffect(() => {
    if (modalIsOpen) {
      checkWinner(cells);
      setCells(cells);
    } else {
      handleReset();
    }
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen]);

  return (
    <GameFiledContainer>
      <GmaeSpaceContainer>
        <GmaeSpaceList>
          <tbody>
            <GmaeSpaceListItem>
              {[0, 1, 2].map((num) => (
                <GameSpaceCell
                  key={num}
                  $num={num}
                  onClick={() => handleClick(num)}
                  disabled={winner || cells[num] !== ""}
                >
                  {cells[num]}
                </GameSpaceCell>
              ))}
            </GmaeSpaceListItem>
            <GmaeSpaceListItem>
              {[3, 4, 5].map((num) => (
                <GameSpaceCell
                  key={num}
                  $num={num}
                  onClick={() => handleClick(num)}
                  disabled={winner || cells[num] !== ""}
                >
                  {cells[num]}
                </GameSpaceCell>
              ))}
            </GmaeSpaceListItem>
            <GmaeSpaceListItem>
              {[6, 7, 8].map((num) => (
                <GameSpaceCell
                  key={num}
                  $num={num}
                  onClick={() => handleClick(num)}
                  disabled={winner || cells[num] !== ""}
                >
                  {cells[num]}
                </GameSpaceCell>
              ))}
            </GmaeSpaceListItem>
          </tbody>
        </GmaeSpaceList>
        <TurnPlayer>{`Turn: ${turnPlayer}`} </TurnPlayer>
      </GmaeSpaceContainer>
      <ModalContainer>
        <ModalWin isOpen={modalIsOpen} onRequestClose={closeModal}>
          <ModalWinContainer>
            <ModalWinSvgContainer onClick={closeModal}>
              <ModalWinSvg>
                <use href={`${SetIcons}#icon-ic_round-close`}></use>
              </ModalWinSvg>
            </ModalWinSvgContainer>
            <ModalWinText>
              {winner ? `Winner is: ${winner}` : isDraw ? "Game in draw" : ""}
            </ModalWinText>
          </ModalWinContainer>
        </ModalWin>
      </ModalContainer>
    </GameFiledContainer>
  );
};

ModalWin.setAppElement("#root");
