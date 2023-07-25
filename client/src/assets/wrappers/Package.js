import styled from 'styled-components'

const Wrapper = styled.main`
.package-content{
    padding: 50px;
    height: 100%;
    .package-title{
        flex-direction: column;
        position: inline-block;
        background: #FCFBEA;
        border-radius:5px;
        padding: 0 20px;
    }
}

























/////////// end ////////////////////////////
.header-image{ 
    display: flex;
    img{
        background-color: #f1f1f1;
        display: block;
        margin: 0 20px;
        max-width: 100%;
        height: auto;
        border-radius:10px;
    }
    .title-container{
        width: 50%;
    }
    .title{
        border-bottom: 5px solid var(--main-400); 
        border-radius:10px;
    
        text-align: center;
        font-size: 3rem;
        color: #fff;
        background: #F3C464;
        text-shadow: 3px 3px #000;
    }
}
.content{
    width: 100%;
}
.category-package{
    display:flex;
    h1{
        min-width:50%;
        text-align:center;
    }
    img{
        width: 50%;
        border-radius:10px;
        border-top: 5px solid var(--main-400); 
    }
}
.package-container{
    padding:30px;
}
@media (max-width: 800px) {
    .last{
        margin-bottom:0;
    }
}

@media (max-width: 480px) {
    .package-content{
        padding:16px;
    }
    .category-package{
        display:flex;
    }
    .desktop{
        display: none;
    }
}
`
export default Wrapper
