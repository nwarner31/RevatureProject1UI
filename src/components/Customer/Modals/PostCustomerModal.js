import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useState, useContext} from 'react';

function PostCustomerModal() {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [name, updateName] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {newData, baseUrl} = useContext(DataContext);


    function usernameChanged(event) {
        updateUsername(event.target.value);
    }

    function passwordChanged(event) {
        updatePassword(event.target.value);
    }

    function nameChanged(event) {
        updateName(event.target.value);
    }

    function submit() {
        const customer = {username: username, password: password, name: name};
        const json = JSON.stringify(customer);
        fetch(baseUrl +'customer', {method: 'POST', body: json,
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
        </form>
    )
}

export default PostCustomerModal;