import styled from 'styled-components'

const Wrapper = styled.main`
.slide {
  background-color: #F0E2DA;
  padding: 20px 50px;
  color: #D5019D;
  text-align:center;
}

.slide h1 {
  color: #b58117;
  text-decoration: underline;
}

.slide ul {
  list-style-type: none;
  padding-left: 20px;
  color: #794e24;
}

.slide li {
  margin-bottom: 10px;
}

.slide li h4 {
  margin: 0;
}



    /* .slide{
        background-color: white;
        border-radius: 10px;
        padding:50px;
        height: 100%;
        h1,h4{
            text-align: center;
        }
    } */
@media (max-width: 800px) {
    h4{
        font-size: 1.3rem;
    }
}

@media (max-width: 480px) {
    .slide {
    padding: 16px;
    }
    h1{
        font-size: 2rem;
    }
    h4{
        font-size: 1.2rem;
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


