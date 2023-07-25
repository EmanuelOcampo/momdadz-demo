import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  /* align-items: center; */
  position:relative;
  height:170vh;

  .logo-booking {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    width:50vh;
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;

  }
  .btn{
    margin:0 auto;
  }
  .btn-available {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

${'' /* //////////////////////////////////////dinagdagg //////////////////////////////////////////////*/}


  .section .section-center{
    position:absolute;
    margin: 0 auto;
    top:5%;
    left:0;
    right:0;
  }

  #booking::before{
    content:'';
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:#0000008c;
  }

  .booking-form{
    max-width: 500px;
    border-top: 7px solid var(--main-400);
    background-color:#fff;
    padding:30px 20px;
    margin: 40px 30px;
    -webkit-box-shadow:0 5px 20px -5px rgba(0,0,0,.5);
    box-shadow:0 5px 20px -5px rgba(0,0,0,.3);
    border-radius: 10px;
  }

  .booking-form .form-group{
    position:relative;
    margin-bottom:30px;
  }

  .booking-form .form-control{
    background-color:#ebecee;
    border-radius:4px;
    border:none;
    height:40px;
    -webkit-box-shadow:none;
    box-shadow:none;
    color:#3e485c;
    font-size:14px;
  }

  .booking-form .form-control::-webkit-input-placeholder{
    color:rgba(62,72,92,.3);
  }

  .booking-form .form-control:-ms-input-placeholder{
    color:rgba(62,72,92,.3);
  }

  .booking-form .form-control::placeholder{
    color:rgba(62,72,92,.3);
  }

  .booking-form input[type=date].form-control:invalid{
    color:rgba(62,72,92,.3);
  }

  .booking-form select.form-control{
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
  }

  .booking-form select.form-control+.select-arrow{
    position:absolute;
    right:0;
    bottom:4px;
    width:32px;
    line-height:32px;
    height:32px;
    text-align:center;
    pointer-events:none;
    color:rgba(62,72,92,.3);
    font-size:14px;
  }

  .booking-form select.form-control+.select-arrow:after{
    display:block;
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
  }
  
  .booking-form .form-label{
    display:inline-block;
    color:#3e485c;
    font-weight:700;
    margin-bottom:6px;
    margin-left:7px;
  }
  
  .booking-form .submit-btn{
    display:inline-block;
    color:#fff;
    background-color:#1e62d8;
    font-weight:700;
    padding:14px 30px;
    border-radius:4px;
    border:none;
    -webkit-transition:.2s all;
    transition:.2s all;
  
  }
  
  .booking-form .submit-btn:hover, .booking-form .submit-btn:focus{
    opacity:.9;
  }
  
  .booking-cta{
    margin-top:120px;
    margin-bottom:30px
  }
  
  .booking-cta h1{
    font-size:3.25rem;
    text-transform:uppercase;
    color: var(--yellow-400);
    font-weight:700;
  }
  
  .booking-cta p{
    font-size:1rem; 
    color: var(--yellow-500);
    text-align:left;
  }

  .form-btn{
    padding-top:20px;
  }
  @media only screen and (max-width: 700px){
  height:200vh;
  .section .section-center{
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
  }
}

@media screen and (min-width: 992px) {
  .logo-booking{
    width: 17rem;
  }

}


@media (max-width:480px){
  height:300vh;
  .logo-booking{
    width: 14rem;
  }
  .booking-form{
    margin:0;
  }
  }

`
export default Wrapper
