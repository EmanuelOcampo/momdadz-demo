import styled from 'styled-components'

const Wrapper = styled.section`

/* Hide the radio buttons */
input[type="radio"] {
  display: none;
}

/* Style the label to look like a button */
label {
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #3e485c;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
}

/* Style the selected label */
input[type="radio"]:checked + label {
  background-color: var(--main-200);
}

`
export default Wrapper
