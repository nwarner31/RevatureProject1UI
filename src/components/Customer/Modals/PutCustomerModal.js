import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useState, useContext} from 'react';

function PutCustomerModal() {
    const [id, updateId] = useState(1);
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [name, updateName] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {newData, baseUrl} = useContext(DataContext);

    function idChanged(event) {
        updateId(event.target.value);
    }

    function usernameChanged(event) {
        updateUsername(event.target.value);
    }

    function passwordChanged(event) {
        updatePassword(event.target.value);
    }

    function nameChanged(event) {
        updateName(event.target.value);
    }

    function getCustomer() {
        fetch(baseUrl+'customer/id/'+id).then((response) => {
            return response.json();
        }).then(data => {
           updateUsername(data.username);
           updatePassword(data.password);
           updateName(data.name);
        });
    }

    function submit() {
        const customer = {id: id, username: username, password: password, name: name};
        const json = JSON.stringify(customer);
        fetch(baseUrl +'customer/'+id, {method: 'PUT', body: json,
            headers:{'Content-Type': 'application/json'}}).then((response) => {
            return response.json();
        }).then(data => {
            newData('customer', [data]);
        });
        closeModal();
        updateUsername('');
        updatePassword('');
        updateName('');
    }

    return (
        <form>
            <div>
                <div>
                    <label>Please enter the id to update:</label>
                    <input type='number' value={id} onChange={idChanged} />
                </div>
                <div onClick={getCustomer}>
                    <OKButton text='Find' />
                </div>
            </div>
            <div>
            <label>Username:</label>
            <input type='text' value={username} onChange={usernameChanged} />
            <label>Password:</label>
            <input type='password' value={password} onChange={passwordChanged} />
            <label>Name:</label>
            <input type='text' value={name} onChange={nameChanged} />
            <div onClick={closeModal}>
                <CancelButton text='Cancel' />
            </div>
            <div onClick={submit}>
                <OKButton text='OK' />
            </div>
            </div>
        </form>
    )
}

export default PutCustomerModal;