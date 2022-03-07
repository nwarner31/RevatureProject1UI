import './Modal.css';
import ModalWindow from './ModalWindow'
import {useContext} from 'react';
import ModalContext from '../../store/modal_context';

function Modal(props) {

    const modal_context = useContext(ModalContext);
    
    return (
        <div>
            <div className={modal_context.isShown + ' modal'} onClick={modal_context.closeModal} />
            <ModalWindow contents={modal_context.content} className={modal_context.isShown +' modal_window'} />
        </div>
    )
}

export default Modal