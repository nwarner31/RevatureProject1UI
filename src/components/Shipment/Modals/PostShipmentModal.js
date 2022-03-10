import {useState, useContext } from "react";

import CancelButton from '../../ui/CancelButton';
import OKButton from '../../ui/OKButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

function PostShipmentModal() {

    const [day, dayChanged] = useState('');
    const [month, monthChanged] = useState('01');
    const [year, yearChanged] = useState('');
    const [shipTime, updateShipTime] = useState('');
    const [bayNum, updateBayNum] = useState(1);

    const {closeModal} = useContext(ModalContext);
    const {newData, baseUrl} = useContext(DataContext);

    function dayChange(event) {
        dayChanged(event.target.value);

    }

    function monthChange(event) {
        monthChanged(event.target.value);
    }

    function yearChange(event) {
        yearChanged(event.target.value);
    }

    function shipTimeChanged(event) {
        updateShipTime(event.target.value);
    }

    function bayNumChanged(event) {
        updateBayNum(event.target.value);
    }

    function submit() {
        const date = year+'-'+month+'-'+day;
        const shipment = {shipDate: date, shipTime: shipTime, bayNum: bayNum};
        const json = JSON.stringify(shipment);
        fetch(baseUrl+'shipment', {method: 'POST', body: json,
            headers:{'Content-Type': 'application/json'}}).then((response) => {
            return response.json();
        }).then(data => {
            newData('shipment', [data]);
        });
        closeModal();
        dayChanged('');
        monthChanged('01');
        yearChanged('');
        updateShipTime('');
        updateBayNum(1);
    }

    return (
        <form>
            Enter shipment date:
                <div>
                    <label>Day:</label>
                    <input type='text' onChange={dayChange} value={day}/>
                </div>
                <div>
                    <label>Month</label>
                    <select value={month} onChange={monthChange}>
                        <option value='01'>January</option>
                        <option value='02'>February</option>
                        <option value='03'>March</option>
                        <option value='04'>April</option>
                        <option value='05'>May</option>
                        <option value='06'>June</option>
                        <option value='07'>July</option>
                        <option value='08'>August</option>
                        <option value='09'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                </div>
                <div>
                    <label>Year</label>
                    <input type='text' value={year} onChange={yearChange}/>
                </div>
            <label>Ship time:</label>
            <input type='text' value={shipTime} onChange={shipTimeChanged} />
            <label>Bay Number:</label>
            <input type='number' value={bayNum} onChange={bayNumChanged} />
            <div onClick={closeModal}>
                <CancelButton text='Cancel' />
            </div>
            <div onClick={submit}>
                <OKButton text='OK'/>
            </div>
        </form>
    )
}

export default PostShipmentModal;