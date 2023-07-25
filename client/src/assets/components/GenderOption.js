import React, { useState } from 'react';
import Wrapper from '../wrappers/GenderOption';

function GenderOption(props) {
  const [gender, setGender] = useState(''); // initialize gender state

  const handleGenderChange = (event) => {
    setGender(event.target.value); // update gender state when an option is selected
  }

  return (
    <Wrapper>
        <div className='form-group'>
            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={props.onGetGender} onClick={handleGenderChange}/> 
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={props.onGetGender} onClick={handleGenderChange} />
            <label htmlFor="female">Female</label>

            <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={props.onGetGender} onClick={handleGenderChange} />
            <label htmlFor="other">other</label>
        </div>
    </Wrapper>
  );
}

export default GenderOption ;