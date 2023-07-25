import styled from 'styled-components'

const Wrapper = styled.section`
.swiper {
  width: 100%;
  height: 300px; 
  img{
    border-radius:10px;
    height: 300px;
    display:block;
    margin: 0 auto;
  }  
}
.swiper-slide {
  /* max-width:100px; */
  overflow:hidden;
  img{
    width:100%;
  }
}

.image-label {
  font-size:20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
}
`
export default Wrapper
