import './Order.css';
import Card from '../ui/Card';
import ProductOrder from './ProductOrder';
import CalendarDate from '../CalendarDate';
import {useState} from "react";

function Order(props) {
    const [isShown, setShown] = useState('hidden');

    function orderClicked() {

        setShown((prevState) => {
            return prevState === 'hidden' ? 'shown' : 'hidden';
        });
    }
    
    const customer = props.customer;
    const shipment = props.shipment;

    return (
        <div onClick={orderClicked}>
            <Card className='order'>
                <div className='order_id'>{props.id}</div>
                <div className='order_info'>
                    <div>Customer Id: {customer.id} Username: {customer.username} Name: {customer.name}</div>
                    <div>Shipment Id: {shipment.id} Date: {shipment.shipDate} Time: {shipment.shipTime} Bay Number: {shipment.bayNum}</div>
                </div>

                    <CalendarDate date={props.orderDate} className='order_cal'/>

            </Card>
            {props.products.map((productOrder) => (
                <ProductOrder key={productOrder.id} product={productOrder.product} quantity={productOrder.productQuantity} className={isShown} />
            ))}
        </div>
    )
}

export default Order;