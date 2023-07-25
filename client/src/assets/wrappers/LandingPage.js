import styled from 'styled-components'

const Wrapper = styled.main`
   /* background-image: -webkit-linear-gradient(80deg, #F5E17B 50%, #fff 80%);height: 100%;  */

  .page {
    display: grid;
    align-items: center;
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
  li{
    font-size:1rem;
  }
  .main-img {
    display: none;
    margin-left:6rem;
    width: 80%;
  }
  .info{
    font-size:1.25rem;
  }

  .btn {
    padding:0.375rem 0.75rem
  }


  /* style section */
  .event-section{
    position: flex;
    .img-div{
      .img-container{
        border: 10px solid #fff;
        border-radius:10px;
        img{
          border: 20px solid #F3C464 ;
          border-radius:10px;
        }
      }
    }
    .title-container{
        padding:50px;
        border-radius:10px;
        width: 100%;
        color: var(--black);
        p{
          color: var(--black);
          font-size:1.5rem;
          font-weight:bolder;
          text-shadow: .5px .5px #fff;
        }
        ul {
          list-style-type: disc;
        }
        li {
          font-weight:bolder;
          list-style-position: inside;
          font-size:1.25rem;
          text-shadow: .5px .5px #fff;
        }
    }    
  }
  .event-phone{
    display:none;
  }
  .image-style{
    max-width:100%;
    margin: 0 auto;
  }
  .img-container{
    margin:50px;
  }
  .content-style{
    display:block;
    margin:auto 0;
    h1{
      margin-bottom: 0;
    }
    hr {
      width: 120px;
      height: 7px;
      border: none;
      background-color: var(--main-500);
      border-radius: 10px;
      margin:auto 0 ;
      opacity: 1;
    }
    p{
      padding-top:10px;
      color: var(--grey-800);
    }

  }
  /* testimonial */
  .testimonials{
    padding:50px;
    text-align: center;
  }
  .testimonial-image{
    width: 7%;
    border-radius: 50%;
    margin: 20px;
  }

  .testimonial-text{
    font-size: 3rem;
    text-transform: inherit;
    line-height: 1.5;
    font-weight: 500;
    padding:50px;
  }

  /* about section */
  .about-section{
    min-height: 200px;
    padding:50px;
    text-align:center;
    h2{
      margin-bottom:0;
      font-weight:900;
    }
    h5{
      color: var(--black);
      font-weight:bolder;
      text-shadow: .5px .5px #fff;
      font-size:1.5rem;
    }
    hr {
      width: 120px;
      height: 7px;
      border: none;
      background-color: var(--main-500);
      border-radius: 10px;
      margin: 0 auto;
      opacity: 1;
    }
  }
  .about-div{
    display: inline-flex;
    .col-sm{
      padding:10px
    }
    img{
      background-color: #F3C464;
      padding:10px; 
      border: 7px solid #fff;
      border-radius:10px;
    }
  }
  .image-about{
    max-width: 300px;
  }
  .about-context{
    h5{
      margin:0 auto;
      text-transform:inherit;
      width: 85%;
      padding-top: 20px;
      line-height: 1.5;
      max-width: 100%;
      color: var(--grey-900);
    }
  }

  /* why choose us section */
  .choose-section{
    padding:50px;
    min-height: 200px;
    text-align:center;
    h2{
      text-transform: inherit;
      font-weight:900;
      margin-bottom:0;
    }
    h3{
      text-transform:inherit;
      font-weight:900;
      padding-top:10px;
    }
    hr {
      width: 120px;
      height: 7px;
      border: none;
      background-color: var(--main-500);
      margin: 0 auto;
      opacity: 1;
    }
    .last{
      display: inline-block;
      margin:0 auto;
      width: 50%;
    }

    img{
      width: 80px;
    }
    p{
      color: var(--grey-800);
      max-width: 100%;
      font-size:1.25rem;
    }
  }
  .choose-content{
    padding:20px 40px;
  }

  .booking-btn{
    margin:0;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    transition: all .5s ease; 
    animation: bounce 2s .5s infinite;

  }
  /* .btn--doar {
    color: #fff;
    padding-right: 0;
    background-color: var(--main-400);
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 70%, 90% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 75% 100%, 0 100%);
  }
  .btn--doar:hover { 
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);  
  }

  .btn--doar:after {
    content: "\f004";
    color: #fff;
    font-family: FontAwesome;
    display: inline-block;
    position: relative;
    right: -55px;
    transition: all 0.2s ease;
  }

  .btn--doar:hover:after {
    margin: -5px 15px;
    right: 0px;
  } */
  /* animation */
  .animate__animated {
    animation-duration: 1.5s;
    animation-fill-mode: both;
  }
  
  .animate__fadeIn {
    animation-name: fadeIn;
  }

  .animated {
    opacity: 0;
    transform: translateX(-100%);
    animation: slide-in 1.5s forwards;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
   from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* keyframes for the "go up" animation */
  @keyframes goUp {
    0% {
      transform: translateY(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translate(-5px, -10px);
    }
    20%, 40%, 60%, 80% {
      transform: translate(5px, -10px);
    }
    100% {
      transform: translateY(0);
    }
}

@keyframes bounce {
    10%, 25%, 40%, 49% {
        animation-timing-function cubic-bezier(.39,.58,.57,1);
        transform translate3d(0,0,0);
    }
    
    20%, 22% {
        animation-timing-function ease-in-out;
        transform translate3d(0,-8px,0);
    }
    35% {
        animation-timing-function ease-in-out;
        transform translate3d(0,-5px,0);
    }
    45% {
        animation-timing-function ease-in-out;
        transform translate3d(0,-1.5px,0);
    }
}

  @media (min-width: 992px) {
    .page {
      padding: 50px;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .event-section{
      align-content:center;
    }
  }
  
  @media (max-width:780px){
    .title-container{
      padding:24px;
      display:none;
    }
    .page{
      padding:24px;
    }
    .event-phone{
      display:block;
      font-weight:bolder;
      text-shadow: .5px .5px #fff;
      color: var(--black);
      p{
        color: var(--black);
      }
    }
    .event-section{
      padding:24px;
    }
    .testimonials{
      padding:24px;
      .testimonial-text{
        font-weight:900;
        font-size:2rem;
        padding:0;
      }
      .testimonial-image{
        width:20%;
      }
    }
    .about-section{
      padding:24px;
    }
    .choose-section{
      padding:24px;
      .last{
        width: 100%;
      }
    }
  }

  @media (max-width:480px){
    .page{
      padding: 16px;
    }
    h1{
      font-size:2.5rem;
    }
    .title-container{
      padding:16px;
      display:none;
    }
    .event-phone{
      display:block;
      color: var(--black);
      font-weight:bolder;
      text-shadow: .2px .2px #fff;
      p{
        color: var(--black);
      }
    }
    .content-style
      ul{
          list-style-type: disc;
        }
      li {
        list-style-position: inside; 
      }
    }
    .event-section{
      padding:16px;
      .img-div{
        .img-container{
          margin:16px;
          border: 10px solid #fff;
          border-radius:10px;
          img{
            border: 15px solid #F3C464 ;
            border-radius:10px;
          }
        }
      }
    }
    .testimonials{
      padding: 16px;
      .testimonial-text{
        font-weight:900;
        font-size:1.5rem;
        padding:0;
      }
    }
    .about-section{
      padding: 16px;
      .about-context{
        h5{
          width:unset;
        }
    }
    .choose-section{
      padding: 16px;
      .last{
        width: 100%;
      }
    }
    .event-div {
      text-align: center;
      padding-bottom: 30px;
    }
  }
`
export default Wrapper
