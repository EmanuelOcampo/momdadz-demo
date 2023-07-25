import React from 'react'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow,  Grid } from "../../assets/components"
import { useAppContext } from '../../context/appContext'

const Gallery = () => {
  const { displayAlert, photos, uploadPhotos,eventType,clientName,handleChange, submitPhotos } = useAppContext()

  const handleInput = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", e.target.files[0]);

      uploadPhotos(formData)
      displayAlert()
      setTimeout(() => {
        window.location.reload()
      }, 500);
    } catch (error) {
      console.log(error)
    }
  }
  const handleUploadInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
    console.log(name, value);
  }

  const handleSelect =(event) => {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
    console.log(name , value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const values = {clientName, eventType, photos} 
    submitPhotos(values)
    window.location.reload()
  }

  return (
    <Wrapper>
      <Grid photos={photos} handleChange={handleInput} />
      <hr/>
      <form onSubmit={handleSubmit} >
        {photos[0] == null ?
          <label className='box-upload' htmlFor='uploadFile'>
            <div className='content-upload'  >
              <p>Drop file here</p>
              <p>or</p>
              <p>Click to upload</p>
              <input hidden id="uploadFile" name="uploadFile" className='choosenFile' type="file" onChange={handleInput} />
            </div>
          </label> : null}


        <div className='input-types form-center'>
          <FormRow
            type='text'
            labelText="Client Name"
            name="clientName"
            value={clientName}
            handleChange={handleUploadInput}
            required
          />

          <div className="form-row">
            <label htmlFor="themeType" className='form-label'>Event Type</label>
            <select
              className="form-control"
              name="eventType"
              value={eventType}
              onChange={handleSelect}
            >
              <option value="bDayParty">  Birthday Party  </option>
              <option value="corporate">  Corporate Event </option>
              <option value="gReveal">    Gender Reveal   </option>
              <option value="baptismal">  Baptismal Event </option>
              <option value="kiddieParty">Kiddie Party    </option>
              <option value="debut">      Debut           </option>
              <option value="wedding">    Wedding         </option>
            </select>
          </div>
          <div className='div-btn'>
            <button type='submit' className='btn btn-block submit-btn'>Submit</button>
          </div>

        </div>
      </form>
    </Wrapper>
  )
}

export default Gallery