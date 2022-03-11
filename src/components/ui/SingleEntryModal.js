import {useContext, useState } from 'react';

import CancelButton from './CancelButton'
import OKButton from './OKButton';
import ModalContext from '../../store/modal_context';
import DataContext from '../../store/data_context';
import './SingleEntryModal.css';

function SingleEntryModal(props) {
    const {closeModal} = useContext(ModalContext);
    const {newData} = useContext(DataContext);
    const [data_value, dataValueChanged] = useState('');
    function submit() {
        fetch(props.url+data_value).then((response) => {
            return response.json();
        }).then(data => {
            let dataArray = [];
            if(!Array.isArray(data)) {
                dataArray = [data];
            } else {
                dataArray = data;
            }
            newData(props.dataType, dataArray);
            dataValueChanged("");
        });
        closeModal();
    }

    function dataChange(event) {
        dataValueChanged(event.target.value);
    }

    return (
        <form>
            <label>{props.text}:</label>
            <input type='text' value={data_value} onChange={dataChange} />
            <div onClick={closeModal} className='sem_button'>
                <CancelButton text='Cancel' />
            </div>
            <div onClick={submit} className='sem_button'>
                <OKButton text='OK' />
            </div>
        </form>
    )
}

export default SingleEntryModal;