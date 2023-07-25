import styled from 'styled-components'

const Wrapper = styled.main`
   .header-image{ 
    border-top: 5px solid var(--main-400); 
    position: relative;
    img{
        border-top:100px;
        background-color: #f1f1f1;
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
        opacity: 60%;  
    }
    .title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        text-align: center;
        font-size: 7rem;
        color: #fff;
        text-shadow: 3px 3px #000;
    }   
   }

    .div-container:hover{
        img{
            opacity: 60%;        
        }
    }
    @media screen and (max-width:1100px) {
        .header-image .title {
            font-size: 5rem;
        }
        .gallery-content{
            padding:16px;
        }
    }

    @media screen and (max-width: 768px) {
        .header-image .title {
            font-size: 3rem;
        }
        .gallery-content{
            padding:30px;
        }
    }

    @media screen and (max-width: 480px) {
        .header-image .title {
            font-size: 2rem;
        }
        .gallery-content{
            padding:16px;
        }
    }

`
export default Wrapper
