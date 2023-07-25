import styled from 'styled-components'

const Wrapper = styled.main`
footer{
    background-color:#263238;
    color:var(--grey-50);
    padding-right:30px;
    padding-left:30px;
}
.main-content{
    display: inline-flex;
}

.div-footer{
    min-width:25%;
    max-width:25%;
    display:inline-block;
    padding:20px;
    a{
        text-decoration: none;
        color:var(--grey-200);
    }
    a:hover{
        color:var(--grey-500);
    }
    p{
        color:var(--grey-200);
        margin-bottom:0;
        font-family: var(--bs-body-font-family)
       
    }
    .content{
        display:inline-flex;
        align-items:flex-start;
        padding-bottom:10px;
        width: 100%;
        p{
            padding-left:10px;
        }
        .icon{
            margin-top:8px;
            min-width:20px;
        }
    }
    .contact{
        padding-top:1.5rem;
    }
}
hr{
    color: white;
    background-color:white ;
}
.links{
    display: flex;
    justify-content:center;
    color: var(--grey-200);
    a{

        color: var(--grey-200);
        text-decoration:none;
    }
    h5{
        text-align:center;    
        padding-right:20px;
        padding-left:20px;
    }
}
.copyright{
    display: flex;
    text-align:center;
    justify-content:center;
    p{
        color:var(--grey-400);
    }
}
@media screen and (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  .div-footer {
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }
  .links{
    text-align:left;
    display:block;
    h5{
        text-align:left;
    }
  }
}
@media (max-width:480px){
    footer{
        padding-right:16px;
        padding-left:16px;
    }
    .div-footer{
        padding: 16px;
        p{
            font-size:1rem;
        }
    }
    .links{
        h5{
            padding-left:0;
        }
    }
  }

`

export default Wrapper
