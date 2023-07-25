import styled from 'styled-components'

const Wrapper = styled.article`
 .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
  padding-bottom:2rem;
  padding-top: 0;
}

.grid_item {
  position: relative;
  height: 16rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.grid_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete_button {
  position: absolute; 
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--main-500);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1; /* Set the z-index to 1 to ensure the button is on top of the image */
}

.delete_button i {
  font-size: 1rem;
}

.delete_button:hover {
  background-color:var(--main-100);
}

.card {
  padding: auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0);
}

.add-photo-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.add-photo-button:hover{
  opacity:60%;
}

`


export default Wrapper
