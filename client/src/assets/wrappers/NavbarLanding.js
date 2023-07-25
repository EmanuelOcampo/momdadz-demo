import styled from 'styled-components'

const Wrapper = styled.main`
  nav { 
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    position: fixed;
    margin: 0 auto;
    display: flex;
    border-bottom: 5px solid var(--main-400); 
  }
 
  .navbar-nav .nav-link.active{
    color: var(--main-400); 
    /* background-color: var(--main-400); */ 
    border-radius:5px;
  }

  .last{
    z-index:-2;
    position: relative;
    border-bottom: 0; 
  }
  
  ul{
    li{
      margin: 10px;
    }
  }
  .nav-landing{
    padding:10px 50px;
    background-color: var(--white);
    box-shadow: none !important;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--main-300);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
    margin-left:3rem;
  }

  .btn {
    padding:0.375rem 0.75rem
  }
  
  .active-nav-link {
    font-weight: bold;
  }

  .underline {
    position: relative;
    border-bottom: 2px solid transparent;
  }

  .underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    border-radius:10px;
    height: 4px;
    background-color: var(--main-500);
    transition: width 0.3s ease-out;
  }

  /* Animation for the underline when hovered */
  .underline:hover::after {
    width: 100%;
  }

  @media (max-width:480px){
    .nav-landing{
      padding:10px 16px;
    }
    .logo{
      width: 12rem;
    }
  }
`
export default Wrapper
