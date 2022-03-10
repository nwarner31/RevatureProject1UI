import ModalContext from '../../store/modal_context';
import DataContext from '../../store/data_context';
import {useContext, useState} from 'react';
import OKButton from './OKButton';
import CancelButton from './CancelButton';

function DateEntryModal(props) {
    //const [date, dateChanged] = useState('');
    const {closeModal} = useContext(ModalContext);
    const {newData} = useContext(DataContext);
    const [day, dayChanged] = useState('');
    const [month, monthChanged] = useState('01');
    const [year, yearChanged] = useState('');
    function submit() {
        const date = year+'-'+month+'-'+day;
        fetch(props.url+date).then((response) => {
            return response.json();
        }).then(data => {
            let dataArray = [];
            if(!Array.isArray(data)) {
                dataArray = [data];
            } else {
                dataArray = data;
            }
            newData(props.dataType, dataArray);
            dayChanged('');
            monthChanged('01');
            yearChanged('');
        });
        closeModal();
    }

    function dayChange(event) {
        dayChanged(event.target.value);

    }

    function monthChange(event) {
        monthChanged(event.target.value);
    }

    function yearChange(event) {
        yearChanged(event.target.value);
    }


    return (
        <form>{props.text}
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
            <div onClick={closeModal}>
                <CancelButton text='Cancel' />
            </div>
            <div onClick={submit}>
                <OKButton text='OK'/>
            </div>
        </form>
    )
}

export default DateEntryModal