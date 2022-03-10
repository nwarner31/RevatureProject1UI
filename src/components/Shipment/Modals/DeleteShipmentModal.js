import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useContext, useState} from 'react';

function DeleteShipmentModal() {
    const [id, updateId] = useState(1);
    const [shipDate, updateShipDate] = useState('');
    const [shipTime, updateShipTime] = useState('');
    const [bayNum, updateBayNum] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {baseUrl} = useContext(DataContext);

    function idChanged(event) {
        updateId(event.target.value);
    }

    function findShipment() {
        fetch(baseUrl+'shipment/id/'+id).then((response) => {
            return response.json();
        }).then(data => {
           updateShipDate(data.shipDate);
           updateShipTime(data.shipTime);
           updateBayNum(data.bayNum);
        });
    }

    function submit() {
        const shipment = {id: id, shipDate: shipDate, shipTime: shipTime, bayNum: bayNum};
        const json = JSON.stringify(shipment);
        const promise = fetch(baseUrl+'shipment/'+id, {method: 'DELETE', body: json,
            headers: {'Content-Type': 'application/json'}});
        promise.then((response) => {
            alert('Deleted successfully');
        });
        promise.catch((response) => {
            alert('There was a problem. Delete failed.');
        });
        closeModal();
        updateId(1);
        updateShipDate('');
        updateShipTime('');
        updateBayNum('');
    }

    return (
        <form>
            <div>
                <div>
                    <label>Enter the id to delete:</label>
                    <input type='number' value={id} onChange={idChanged} />
                    <div onClick={findShipment} >
                        <OKButton text='Find' />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Ship date: {shipDate}</p>
                        <p>Ship time: {shipTime}</p>
                        <p>Bay number: {bayNum}</p>
                    </div>
                </div>
                <div onClick={closeModal} >
                    <CancelButton text='Cancel' />
                </div>
                <div onClick={submit} >
                    <OKButton text='Delete' />
                </div>
            </div>
        </form>
    )
}

export default DeleteShipmentModal;