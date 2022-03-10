import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useState, useContext} from 'react';

function DeleteOrderModal() {
    const [orderId, updateOrderId] = useState(1);
    const [customer, updateCustomer] = useState({id: '', name: '', username: ''});
    const [shipment, updateShipment] = useState({id: '', shidDate: '', shipTime: '', bayNum: ''});
    const [products, updateProducts] = useState([]);
    const [orderDate, updateOrderDate] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {baseUrl} = useContext(DataContext);

    function orderIdChanged(event) {
        updateOrderId(event.target.value);
    }

    function getOrder() {
        fetch(baseUrl+'order/id/'+orderId).then((response) => {
            return response.json();
        }).then((data) => {
            updateCustomer(data.customer);
            updateShipment(data.shipment);
            updateProducts(data.products);
            updateOrderDate(data.orderDate);
        })
    }

    function submit() {
        const order = {id: orderId, customer: customer, shipment: shipment, orderDate: orderDate, products: products};
        const json = JSON.stringify(order);
        const promise = fetch(baseUrl+'order/'+orderId, {method: 'DELETE', body: json,
            headers:{'Content-Type': 'application/json'}});
        promise.then((response) => {
            alert('Deleted successfully');
        });
        promise.catch((response) => {
            alert('There was a problem. Delete failed.');
        });
        closeModal();
        updateOrderId(1);
    }

    return (
        <div>
            <div>
                <label>Enter id:</label>
                <input type='number' value={orderId} onChange={orderIdChanged} />
                <div onClick={getOrder} >
                    <OKButton text='Find Order' />
                </div>
            </div>
            <div>
                <div>
                    <p>Customer:</p>
                    <p>{customer.id} {customer.name} {customer.username}</p>
                </div>
                <div>
                    <p>Shipment:</p>
                    <p>{shipment.id} {shipment.shidDate} {shipment.shipTime} {shipment.bayNum}</p>
                </div>
                <div>
                    <p>Order date:</p>
                    <p>{orderDate}</p>
                </div>
                <div>
                    <p>Products:</p>
                    {products.map((productOrder) => (
                        <p>{productOrder.product.id} {productOrder.product.upc} {productOrder.product.name} {productOrder.product.department} {productOrder.productQuantity}</p>
                    ))}
                </div>
            </div>
            <div>
                <div onClick={closeModal} >
                    <CancelButton text='Cancel' />
                </div>
                <div onClick={submit} >
                    <OKButton text='Delete' />
                </div>
            </div>
        </div>
    )
}

export default DeleteOrderModal;