import {useState, useContext} from 'react';

import './ProductButtons.css';
import MenuButton from '../ui/MenuButton';
import ModalContext from '../../store/modal_context';
import DataContext from '../../store/data_context';

import SingleEntryModal from '../ui/SingleEntryModal';
import PostProductModal from './Modals/PostProductModal';

function ProductButtons() {
    const [isShown, setShown] = useState('hidden');
    const { openModal } = useContext(ModalContext);
    const {newData} = useContext(DataContext);

    function menuClicked() {
        const show = isShown === 'hidden' ? 'shown' : 'hidden';
        setShown(show);
    }

    function getAllClicked() {
        fetch("http://localhost:9000/product").then((response) => {
            return response.json();
        }).then(data => {
            newData('product', data);
        })
    };

    function getById() {
        openModal(<SingleEntryModal dataType='product' url='http://localhost:9000/product/id/' text='Enter Id' />);
    }

    function getByUpc() {
        openModal(<SingleEntryModal dataType='product' url='http://localhost:9000/product/upc/' text='Enter UPC' />);
    }
    
    function getByName() {
        openModal(<SingleEntryModal dataType='product' url='http://localhost:9000/product/name/' text='Enter product name' />);
    }

    function getByDepartment() {
        openModal(<SingleEntryModal dataType='product' url='http://localhost:9000/product/dept/' text='Enter department name' />);
    }

    function addDepartment() {
        openModal(<PostProductModal />);
    }

    return(
        <div>
            <MenuButton title='Product' click={menuClicked} className='pb_main_button'/>
            <MenuButton title='Get All' className={isShown + ' pb_sub_button'} click={getAllClicked} />
            <MenuButton title='Get By Id' className={isShown + ' pb_sub_button'} click={getById} />
            <MenuButton title='Get By UPC' className={isShown + ' pb_sub_button'} click={getByUpc} />
            <MenuButton title='Get By Name' className={isShown + ' pb_sub_button'} click={getByName} />
            <MenuButton title='Get By Department' className={isShown + ' pb_sub_button'} click={getByDepartment} />
            <MenuButton title='Add Product' className={isShown + ' pb_sub_button'} click={addDepartment} />
        </div>
    )


}

export default ProductButtons;