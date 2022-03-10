import CalendarDate from '../CalendarDate';
import './Shipment.css';
import Card from '../ui/Card';

function Shipment(props) {
    
    return(
        <Card className='shipment'>
            <div className='shipment_id'>{props.id}</div>

            <CalendarDate date={props.shipDate} className='ship_date' />
            <div className='ship_time'>
                Ship Time:
                <div className='bold_text'>{props.shipTime}</div>
            </div>
            <div className='bay_number'>
                Bay Number:
                <div class='bold_text'>{props.bayNumber}</div>
            </div>
        </Card> 
    )
}

export default Shipment;