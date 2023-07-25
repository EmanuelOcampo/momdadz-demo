import styled from 'styled-components'

const Wrapper = styled.section`
    a{
        color: black; /* Change the color as per your preference */
    }

    .fc-event{
        overflow:hidden;
    }
    .fc-col-header-cell{
        background-color:var(--backgroundColor)
    }
    td,tr,th,table,.fc-scrollgrid {
        border-color:var(--grey-300);
    }
    @media (max-width:480px){
    .fc-toolbar-title{
        font-size: 1.25em
    }
  }
`
export default Wrapper
