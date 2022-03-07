import './CustomerButtons.css';
import MenuButton from '../ui/MenuButton';
import {useState, useContext} from "react";
import DataContext from '../../store/data_context';
import ModalContext from '../../store/modal_context';
import SingleEntryModal from '../ui/SingleEntryModal';

function CustomerButtons(props) {
    const [isShown, setShown] = useState('hidden');
    const {newData} = useContext(DataContext);
    const {openModal} = useContext(ModalContext);

    function menuClicked() {
        const show = isShown === 'hidden' ? 'shown' : 'hidden';
        setShown(show);
    }

    function getAllClicked() {
        fetch("http://localhost:9000/customer").then((response) => {
            return response.json();
        }).then(data => {
            newData('customer', data);
        })
    };

    function getById() {
        openModal(<SingleEntryModal dataType='customer' url='http://localhost:9000/customer/id/' text='Enter id' />)

    }
    
    return (
        <div>
            <MenuButton title='Customers' className='cb_main_button' click={menuClicked} />
            <MenuButton title='Get All' className={isShown + ' cb_sub_button'} click={getAllClicked}/>
            <MenuButton title='Get By Id' className={isShown + ' cb_sub_button'} click={getById} />
        </div>
    )

}

export default CustomerButtons;