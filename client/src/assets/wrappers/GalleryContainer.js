import styled from 'styled-components'

const Wrapper = styled.main`
    .div-container{
    position: relative;
    overflow: hidden; 
    height: 40vh;
    border-radius:20px;
    margin-top:20px;
        img{
            background-color: #f1f1f1;
            margin: 0 auto;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        .title-container{
            border: 1px solid var(--white);
            border-radius:10px;
            background:#AA377C99;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            z-index:1;
            width: 80%;
        }
        .title{
            margin-bottom:0;
            text-align: center;
            font-size: 3rem;
            color: #fff;
            text-shadow: 3px 3px #000;
        }
    }

    .div-container:hover{
        img{
            opacity: 60%;        
        }
    }
    @media screen and (max-width:1000px) {
        .div-container{
            .title{
                font-size: 2.3rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .div-container{
            .title{
                font-size: 1.5rem;
            }
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
   `
export default Wrapper
