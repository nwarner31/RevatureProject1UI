import './Customer.css';
import Card from '../ui/Card';

function Customer (props) {

    return (
        <Card className='customer'>
            <div>{props.id}</div>
            <div>{props.username}</div>
            <div>{props.name}</div>
        </Card>
    )
}

export default Customer;