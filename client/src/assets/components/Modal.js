import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalAlert = ({show, handleClose,content,title,icon,link}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span style={{ paddingRight: '10px' }}>
                        {icon}
                    </span>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <a href={link} style={{ color: 'white' }}>
                        Close
                    </a>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAlert