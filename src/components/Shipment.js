import CalendarDate from './CalendarDate';
import './Shipment.css';
import Card from './ui/Card';

function Shipment(props) {
    const date = props.date;
    return(
        <Card className='shipment'>
            <div>{props.id}</div>
            <CalendarDate date={date} className='ship_date' />
        </Card>
    )
}

export default Shipment;