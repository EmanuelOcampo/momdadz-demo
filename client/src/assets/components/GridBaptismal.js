import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../wrappers/Grid'

const GridBaptismal = ({ photos }) => {
    const { getBaptismalPhotos, deletePhoto,user } = useAppContext()

    const handleDelete = (id, photo) => {
        try {
            deletePhoto(id, photo)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBaptismalPhotos()
      // eslint-disable-next-line 
    }, []);
    

    return (
        <Wrapper>
            <div className='grid'>
                {photos.map(({ photo, _id }) => {
                    return <div key={_id} className='grid_item'>
                        {user?.isAdmin === true ?
                        <button className='delete_button' aria-label='Delete' onClick={() => handleDelete(_id, photo)}>
                            <i className='fas fa-times'></i>
                        </button> : null
                        }
                        <img
                            src={`../uploads/${photo}`}
                            alt="grid_image"
                        />
                    </div>
                })}
            </div>
        </Wrapper>
    )
}

export default GridBaptismal