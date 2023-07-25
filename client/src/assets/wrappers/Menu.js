import styled from 'styled-components'

const Wrapper = styled.article`
    .Menu-content{
        padding:50px;
    }
    .item{
        .img-container{
            border: 10px solid #fff;
            border-radius:10px; 
        }
        img{
            border-radius:10px;
            height: 500px;
            border: 20px solid #F3C464;
            border-radius:10px;
        }
    }
    .category-menu{
        padding-top:50px;
    }
    .menu-category{
        /* width: 50%; */
        display: inline-block;
        margin-left:auto;
    }
 
    .desert-content{
        padding:30px;
        /* width:50%; */
        margin: auto 0;
        text-align:center;
        h2{
      
            text-transform:inherit;
            font-weight:600;
        }
    }

    .swiper-container{
        width: 100%; 
        display: inline-block;
        margin-left:auto;

    }



    @media (max-width:480px){
    h1{
        font-size: 45px;
        font-weight:bold;
    }
    h2{
        font-size:2rem;
        text-align: left;
    }
    .Menu-content{
        padding:16px;
    }
    .menu-category{
        width: 100%;
        display: inline-block;
        margin-left:auto;
    }
    .desert-content{
        width: 100%;
        padding: 16px;
    }
    .category-menu{
        padding-top:10px;
        padding-bottom:30px;
    }
}
`
export default Wrapper
