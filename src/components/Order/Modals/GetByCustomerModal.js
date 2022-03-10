import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';
import CancelButton from '../../ui/CancelButton';
import OKButton from '../../ui/OKButton';

import {useState, useContext} from 'react';

function GetByCustomerModal() {
    const {closeModal} = useContext(ModalContext);
    const {baseUrl, newData} = useContext(DataContext);

    const [customerId, updateCustomerId] = useState(1);

    const [customer, updateCustomer] = useState({username: '', name: ''});

    function customerIdChanged(event) {
        updateCustomerId(event.target.value);
    }

    function viewCustomer() {
        fetch(baseUrl+'customer/id/'+customerId).then((response) => {
            return response.json();
        }).then((data) => {
            updateCustomer(data);
        });
    }

    function submit() {
        fetch(baseUrl+'order/customer/'+customerId).then((response) => {
            return response.json();
        }).then((data) => {
            newData('order', data);
        });
        closeModal();
        updateCustomerId(1);
        updateCustomer({username: '', name: ''});
    }

    return (
        <form>
            <div>
                <label>Enter customer id:</label>
                <input type='number' value={customerId} onChange={customerIdChanged} />
                <div onClick={viewCustomer}>
                    <OKButton text='Display Customer Info' />
                </div>
                <p>{customer.name} {customer.username}</p>
            </div>
            <div>
                <div onClick={closeModal} >
                    <CancelButton text='Cancel' />
                </div>
                <div onClick={submit} >
                    <OKButton text='OK' />
                </div>
            </div>
        </form>
    )
}

export default GetByCustomerModal;