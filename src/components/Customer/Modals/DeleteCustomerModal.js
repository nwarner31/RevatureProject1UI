import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useContext, useState} from 'react';

function DeleteCustomerModal() {
    const [id, updateId] = useState('1');
    const [username, updateUsername] = useState('');
    const [name, updateName] = useState('');
    const [password, updatePassword] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {baseUrl} = useContext(DataContext);

    function idChanged(event) {
        updateId(event.target.value);
    }

    function idChanged(event) {
        updateId(event.target.value);
    }

    function findCustomer() {
        fetch(baseUrl+'customer/id/'+id).then((response) => {
            return response.json();
        }).then((data) => {
            updateUsername(data.username);
            updateName(data.name);
            updatePassword(data.password);
        });
    }

    function submit() {
        const customer = {id: id, username: username, password: password, name: name};
        const json = JSON.stringify(customer);
         const promise = fetch(baseUrl+'customer/'+id, {method: 'DELETE', body: json,
            headers: {'Content-Type': 'application/json'}});
         promise.then((response) => {
             alert('Deleted successfully');
         });
         promise.catch((response) => {
             alert('There was a problem. Delete failed.');
         });
         closeModal();
         updateId(1);
         updateUsername('');
         updateName('');
    }

    return (
        <form>
            <div>
                <div>
                    <label>Enter the id to delete:</label>
                    <input type='number' value={id} onChange={idChanged} />
                </div>
                <div onClick={findCustomer} >
                    <OKButton text='Find' />
                </div>
            </div>
            <div>
                <div>
                    <p>Username: {username}</p>
                    <p>Name: {name}</p>
                </div>
                <div onClick={closeModal}>
                    <CancelButton text='Cancel' />
                </div>
                <div onClick={submit}>
                    <OKButton text='Delete' />
                </div>
            </div>
        </form>
    )
}

export default DeleteCustomerModal;