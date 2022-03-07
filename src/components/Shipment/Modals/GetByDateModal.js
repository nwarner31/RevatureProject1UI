import DateInput from '../../ui/DateInput';
import {useState} from 'react';
import OKButton from '../../ui/OKButton';

function GetByDateModal(props) {
    const [date, dateChanged] = useState('');
    function submit() {
        console.log('submit');
        console.log(date);
    }

    return (
        <form>
        <DateInput value={date} update={dateChanged}/>
            <div onClick={submit}>
            <OKButton text='OK'/>
            </div>
    </form>
    )
}

export default GetByDateModal