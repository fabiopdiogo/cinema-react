import React,{useState} from 'react';

import styled from 'styled-components';

type ButtonProps = {
  checkedValue?: boolean;  
  onClick: () => void;
  children: number;
};

interface Props{
  children: number;
  row:number;
}


const StyledButton = styled.button<ButtonProps>`
    border: 2px solid black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.checkedValue ? 'green' : 'red'};
    color:white;
`

const PoltronaOption = ({children,row}: Props) => {
  const [checkedValue, setCheckedValue] = useState(true);
  
  function handleClick () {
    setCheckedValue(!checkedValue);
    console.log(checkedValue)
  }
  return(
    <StyledButton checkedValue={checkedValue} onClick={handleClick}>{children}</StyledButton>
  )
}

export default PoltronaOption;