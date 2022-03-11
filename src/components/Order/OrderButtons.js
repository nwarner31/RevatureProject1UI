import MenuButton from '../ui/MenuButton';
import DataContext from '../../store/data_context';
import ModalContext from '../../store/modal_context';
import PostOrderModal from './Modals/PostOrderModal';
import SingleEntryModal from '../ui/SingleEntryModal';
import DateEntryModal from '../ui/DateEntryModal';
import GetByCustomerModal from './Modals/GetByCustomerModal';
import PutOrderModal from './Modals/PutOrderModal';
import DeleteOrderModal from './Modals/DeleteOrderModal';

import './OrderButtons.css';
import {useState, useContext} from "react";


function OrderButtons(props) {
    //const [isShown, setShown] = useState('hidden');
    const {newData, baseUrl} = useContext(DataContext);
    const {openModal} = useContext(ModalContext);

    const isShown = props.shown === 'order' ? 'shown' : 'hidden';
    function menuClicked() {

        const show = props.shown === 'order' ? 'none' : 'order';
        props.updateShown(show);
        // setShown((prevState) => {
        //     return prevState === 'hidden' ? 'shown' : 'hidden';
        // });
    }

    function getAll() {
        fetch(baseUrl+'order').then((response) => {
            return response.json();
        }).then((data) => {
            newData('order', data);
        });
    }

    function getById() {
        openModal(<SingleEntryModal dataType='order' url={baseUrl+'order/id/'} text='Enter id' />)
    }

    function getByDate() {
        openModal(<DateEntryModal dataType='order' text='Enter order date' url={baseUrl+'order/date/'} />);
    }

    function getByCustomer() {
        openModal(<GetByCustomerModal />)
    }

    function addOrder() {
        openModal(<PostOrderModal />)
    }

    function updateOrder() {
        openModal(<PutOrderModal />);
    }

    function deleteOrder() {
        openModal(<DeleteOrderModal />)
    }

    return (
        <div>
            <MenuButton title='Order' className='ob_main_button' click={menuClicked} />
            <MenuButton title='Get All' className={isShown+ ' ob_sub_button'} click={getAll} />
            <MenuButton title='Get By Id' className={isShown+ ' ob_sub_button'} click={getById} />
            <MenuButton title='Get By Date' className={isShown+ ' ob_sub_button'} click={getByDate} />
            <MenuButton title='Get By Customer' className={isShown+ ' ob_sub_button'} click={getByCustomer} />
            <MenuButton title='Add Order' className={isShown+ ' ob_sub_button'} click={addOrder} />
            <MenuButton title='Update Order' className={isShown+ ' ob_sub_button'} click={updateOrder} />
            <MenuButton title='Delete Order' className={isShown+ ' ob_sub_button'} click={deleteOrder} />
        </div>
    )
}

export default OrderButtons;