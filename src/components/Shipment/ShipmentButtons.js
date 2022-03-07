import './ShipmentButtons.css';

import MenuButton from '../ui/MenuButton';
import DataContext from '../../store/data_context';
import ModalContext from '../../store/modal_context';
import SingleEntryModal from '../ui/SingleEntryModal';
import DateEntryModal from '../ui/DateEntryModal';

import {useContext, useState} from "react";

function ShipmentButtons() {
    const [isShown, setShown] = useState('hidden');
    const {newData} = useContext(DataContext);
    const {openModal} = useContext(ModalContext);
    
    function menuClicked() {

        setShown((prevState) => {
            return prevState === 'hidden' ? 'shown' : 'hidden';
        });
    }

    function getAllClicked() {
        fetch("http://localhost:9000/shipment").then((response) => {
            return response.json();
        }).then(data => {
            newData('shipment', data);
        })
    };

    function getById() {
        openModal(<SingleEntryModal dataType='shipment' url='http://localhost:9000/shipment/id/' text='Enter id' />)
    }

    function getByDate() {
        openModal(<DateEntryModal dataType='shipment' text='Enter shipment date' url='http://localhost:9000/shipment/date/'/>);
    }
    
    return (
        <div>
            <MenuButton title='Shipment' click={menuClicked} className='sb_main_button'/>
            <MenuButton title='Get All' className={isShown+ ' sb_sub_button'} click={getAllClicked} />
            <MenuButton title='Get By Id' className={isShown+ ' sb_sub_button'} click={getById} />
            <MenuButton title='Get By Date' className={isShown+ ' sb_sub_button'} click={getByDate} />
        </div>
    )
}

export default ShipmentButtons;