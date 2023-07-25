import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../wrappers/Grid'
import photo from '../images/add.png'


const Grid = ({ photos ,handleChange, disable } ) => {
    const { getPhotos, deletePhoto } = useAppContext()

    const handleDelete = (id, photo) => {
        try {
            deletePhoto(id, photo)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getPhotos()
      // eslint-disable-next-line 
    }, []);
    

    return (
        <Wrapper>
            <div className='grid'>
                {photos.map(({ photo, _id }) => {
                    return <div key={_id} className='grid_item'>
                        <button className='delete_button' aria-label='Delete' onClick={() => handleDelete(_id, photo)}>
                            <i className='fas fa-times'></i>
                        </button>
                        <img
                            src={`../uploads/${photo}`}
                            alt="grid_image"
                        />
                    </div>
                })}
                {photos[0] != null && !disable &&
                    <div className="grid_item card" >
                        <label htmlFor='uploadFile'>
                            <input hidden id="uploadFile" name="uploadFile" className='choosenFile' type="file" onChange={handleChange} />
                            <div className="add-photo-button" >
                                <img
                                    src={photo}
                                    alt="grid_image"
                                />
                            </div>
                        </label>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Grid