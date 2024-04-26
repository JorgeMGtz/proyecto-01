import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
    width: '350px',
    height: '500px',
    top: '50%',
    left: '50%',
    transfotm: 'tranlate(-50%, -50%)',
    padding:'0px'
}

const Login = () => {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

  return (
    <React.Fragment>
        <button
            className='Login'
            onClick={openModal}
        >   +
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            <div className='d-flex flex-column justify-content-between pt-3'>
                <div className='modal-title'>
                    <h2> LogIn </h2>
                </div>
            </div>
            <div className='modal-content'>
                <input type='text' placeholder='Usuario'/>
                <input type='text' placeholder='Contraseña'/>
                <button className='modal-btn btn btn-danger' onClick={closeModal}>Cancelar</button>
                <button className='modal-btn btn btn-primary'>Ingresar</button>
            </div>
            <button onClick={closeModal}>cancelar</button>
        </Modal>
    </React.Fragment>
    
  )
}

export default Login