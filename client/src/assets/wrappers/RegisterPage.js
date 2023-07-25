import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--main-400);
  }

  .btn-back{
    width: 100px;
    position:absolute;
    top:0;
    
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  .form-admin{
    max-width: 550px;
    border-top: 5px solid var(--main-400);
  }
  @media screen and (max-width: 480px) {
    .logo{
      width:15rem;
    }
  }
`
export default Wrapper
