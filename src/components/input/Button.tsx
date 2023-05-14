import styled from "styled-components";

const Button = styled.button`

cursor: pointer;
  border: 2px solid #ed8620;
  padding: 14px;
  line-height: 15px;
  margin: 5px;
  width: 240px;
  border-radius: 40px;
  background:#ed8620;
  color: #fff;
  text-align: center;
  width: auto;
  padding-left: 26px;
  padding-right: 26px;

  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: gray;
  }
`
export default Button