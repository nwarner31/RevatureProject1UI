import './Customer.css';
import Card from '../ui/Card';

function Customer (props) {

    return (
        <Card className='customer'>
            <div className='customer_id'>{props.id}</div>
            <div className='customer_username'>{props.username}</div>
            <div className='customer_name'>{props.name}</div>
        </Card>
    )
}

export default Customer;