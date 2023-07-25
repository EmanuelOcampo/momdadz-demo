import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  max-width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  margin-bottom:30px;
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  } 
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    ${'' /* height: 30px; */}
  }
  .accept-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .cancelled-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }

  .btn-setAcceptBooking{
    text-align: end;
  }

  ${'' /* ////////// dinagdag ////////////////////////////// */}
  .box-upload{
    border: 3px solid gray;
    border-style: dashed;
    border-radius:3px;
    height:200px;
    width: 100%;
  }

  .content-upload{
    text-align:center;
    position:relative;
    top:50px;
  }

  .content-upload p{
    margin:auto 0;
    max-width:100%;
    align-self:center;
  }

  .choosenFile{
    display:none;
  }

  .input-types{
    padding-top:20px;
  } 

  .div-btn{
    align-self:end;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
