import {useState} from 'react';

function DateInput(props) {
    const [day, dayChanged] = useState('');
    const [month, monthChanged] = useState('01');
    const [year, yearChanged] = useState('');

    function inputChange() {
        props.update(year+'-'+month+'-'+day);
    }

    function dayChange(event) {
        dayChanged(() => {
            return event.target.value;
        }, inputChange());

    }

    function monthChange(event) {
        monthChanged(() => {
            return event.target.value;
        });
        inputChange();
    }

    function yearChange(event) {
        yearChanged(() => {
            return event.target.value;
        });
        inputChange();
    }
    
    return (
        <div>
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
        </div>
    )
}

export default DateInput;