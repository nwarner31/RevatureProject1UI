import CalendarDate from '../CalendarDate';
import './Shipment.css';
import Card from '../ui/Card';

function Shipment(props) {
    
    return(
        <Card className='shipment'>
            <div>{props.id}</div>

            <CalendarDate date={props.shipDate} className='ship_date' />
            <div>
                {props.shipTime}
            </div>
            <div>
                {props.bayNumber}
            </div>
        </Card> 
    )
}

export default Shipment;