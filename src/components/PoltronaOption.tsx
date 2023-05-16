import React,{useState} from 'react';

import styled from 'styled-components';

type ButtonProps = {
  checkedValue?: boolean;  
  onClick: () => void;
  children: number;
};

interface Props{
  children: number;
  col:number;
  row:number;
  setSeat(row:number,col:number,checkedValue: boolean) : void;  
  disabled: boolean;
  id: string;
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

    ${props => props.disabled && 'cursor: pointer;'}

    :hover {
      background-color: ${props => props.theme.primaryHover};
    }

    :disabled {
      background-color: ${props => props.theme.disabled};
    }    
`

const PoltronaOption = ({children,setSeat,col,row,disabled,id}: Props) => {
  const [checkedValue, setCheckedValue] = useState(true);
  const [idPoltrona, setIdPoltrona] = useState(id);
  console.log(id);
  if(checkedValue===false){
    disabled=false;
  }
  
  function handleClick () {
    setCheckedValue(!checkedValue);
    console.log(checkedValue)
    setSeat(row,col,checkedValue);
  }


  return(
    <StyledButton checkedValue={checkedValue} onClick={handleClick} disabled={disabled}>{children}</StyledButton>
  )
}

export default PoltronaOption;