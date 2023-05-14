import React ,{useState} from 'react'; 
import styled from 'styled-components';

interface Props {
  children: string;
  handleClick (id: string): void;
  id : string;

}


const StyledLabel = styled.label`  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ed8620;
  border-radius: 10px;
  width: 600px;  
  cursor: pointer;
`

function Label ({children,handleClick,id}: Props){

return(
  <div>
    <StyledLabel onClick={()=>handleClick(id)}>{children}</StyledLabel>
  </div>
)

}

export default Label;