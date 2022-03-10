import './ShipmentButtons.css';

import MenuButton from '../ui/MenuButton';
import DataContext from '../../store/data_context';
import ModalContext from '../../store/modal_context';
import SingleEntryModal from '../ui/SingleEntryModal';
import DateEntryModal from '../ui/DateEntryModal';
import PostShipmentModal from './Modals/PostShipmentModal';
import PutShipmentModal from './Modals/PutShipmentModal';
import DeleteShipmentModal from './Modals/DeleteShipmentModal';

import {useContext, useState} from "react";

function ShipmentButtons() {
    const [isShown, setShown] = useState('hidden');
    const {newData, baseUrl} = useContext(DataContext);
    const {openModal} = useContext(ModalContext);
    
    function menuClicked() {

        setShown((prevState) => {
            return prevState === 'hidden' ? 'shown' : 'hidden';
        });
    }

    function getAllClicked() {
        fetch(baseUrl+'shipment').then((response) => {
            return response.json();
        }).then(data => {
            newData('shipment', data);
        })
    };

    function getById() {
        openModal(<SingleEntryModal dataType='shipment' url={baseUrl+'shipment/id/'} text='Enter id' />)
    }

    function getByDate() {
        openModal(<DateEntryModal dataType='shipment' text='Enter shipment date' url={baseUrl+'shipment/date/'} />);
    }

    function addShipment() {
        openModal(<PostShipmentModal />)
    }

    function updateShipment() {
        openModal(<PutShipmentModal />);
    }

    function deleteShipment() {
        openModal(<DeleteShipmentModal />);
    }
    
    return (
        <div>
            <MenuButton title='Shipment' click={menuClicked} className='sb_main_button'/>
            <MenuButton title='Get All' className={isShown+ ' sb_sub_button'} click={getAllClicked} />
            <MenuButton title='Get By Id' className={isShown+ ' sb_sub_button'} click={getById} />
            <MenuButton title='Get By Date' className={isShown+ ' sb_sub_button'} click={getByDate} />
            <MenuButton title='Add Shipment' className={isShown+ ' sb_sub_button'} click={addShipment} />
            <MenuButton title='Update Shipment' className={isShown+ ' sb_sub_button'} click={updateShipment} />
            <MenuButton title='Delete Shipment' className={isShown+ ' sb_sub_button'} click={deleteShipment} />
         </div>
    )
}

export default ShipmentButtons;