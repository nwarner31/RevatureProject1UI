import './CustomerButtons.css';
import MenuButton from '../ui/MenuButton';
import {useState, useContext} from "react";
import DataContext from '../../store/data_context';
import ModalContext from '../../store/modal_context';
import SingleEntryModal from '../ui/SingleEntryModal';
import PostCustomerModal from './Modals/PostCustomerModal';
import PutCustomerModal from './Modals/PutCustomerModal';
import DeleteCutomerModal from './Modals/DeleteCustomerModal';

function CustomerButtons(props) {
    //const [isShown, setShown] = useState('hidden');
    const {newData, baseUrl} = useContext(DataContext);
    const {openModal} = useContext(ModalContext);

    const isShown = props.shown === 'customer' ? 'shown' : 'hidden';
    function menuClicked() {
        // const show = isShown === 'hidden' ? 'shown' : 'hidden';
        // setShown(show);
        const show = props.shown === 'customer' ? 'none' : 'customer';
        props.updateShown(show);
    }

    function getAllClicked() {
        fetch(baseUrl+'customer').then((response) => {
            return response.json();
        }).then(data => {
            newData('customer', data);
        })
    };

    function getById() {
        openModal(<SingleEntryModal dataType='customer' url={baseUrl+'customer/id/'} text='Enter id' />);
    }
    
    function addCustomer() {
        openModal(<PostCustomerModal />);
    }

    function updateCustomer() {
        openModal(<PutCustomerModal />);
    }

    function deleteCustomer() {
        openModal(<DeleteCutomerModal />);
    }
    
    return (
        <div>
            <MenuButton title='Customers' className='cb_main_button' click={menuClicked} />
            <MenuButton title='Get All' className={isShown + ' cb_sub_button'} click={getAllClicked}/>
            <MenuButton title='Get By Id' className={isShown + ' cb_sub_button'} click={getById} />
            <MenuButton title='Add Customer' className={isShown + ' cb_sub_button'} click={addCustomer} />
            <MenuButton title='Update Customer' className={isShown + ' cb_sub_button'} click={updateCustomer} />
            <MenuButton title='Delete Customer' className={isShown + ' cb_sub_button'} click={deleteCustomer} />
        </div>
    )

}

export default CustomerButtons;