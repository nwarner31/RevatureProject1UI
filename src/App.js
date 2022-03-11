import logo from './logo.svg';
import './App.css';
import Page from './components/ui/Page';
import Modal from './components/ui/Modal';
import ModalContext from './store/modal_context';
import DataContext from './store/data_context';
import { useState, useContext } from 'react';

function App() {
    const [showModal, setShowModal] = useState('hidden');
    const [modalContent, setModalContent] = useState('');
    
    function createModal(modalContents){
        setShowModal('show');
        setModalContent(modalContents);
    }

    function cancelModal(){
        setShowModal('hidden');
    }

    function confirmModal() {

    }
    
    const [info, infoChanged] = useState({
        type: 'none',
        items: []
    });
    
    function newInfo(infoType, newInfo) {
        infoChanged({
            type: infoType,
            items: newInfo
        });
    }

    return (
        <div className="App">
            <ModalContext.Provider value={{isShown: showModal, closeModal: cancelModal, openModal: createModal, content: modalContent}}>
                <DataContext.Provider value={{data: info, newData: newInfo, baseUrl: 'http://20.118.165.95:9000/'}}>
                    <Page />
                    <Modal confirm={confirmModal}  className={showModal} content={''}/>
                </DataContext.Provider>
            </ModalContext.Provider>
        </div>
    );
}

export default App;
