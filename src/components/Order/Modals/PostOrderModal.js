import DataContext from '../../../store/data_context';
import ModalContext from '../../../store/modal_context';
import CancelButton from '../../ui/CancelButton';
import OKButton from '../../ui/OKButton';

import {useState, useContext} from 'react';

function PostOrderModal () {
    const [customerId, updateCustomerId] = useState(1);
    const [customer, updateCustomer] = useState({id: '', name: '', username: ''});

    const [shipmentId, updateShipmentId] = useState(1);
    const [shipment, updateShipment] = useState({id: '', shidDate: '', shipTime: '', bayNum: ''});

    const [productId, updateProductId] = useState(1);
    const [quantity, updateQuantity] = useState(1);
    const [products, updateProducts] = useState([]);

    const [day, dayChanged] = useState('');
    const [month, monthChanged] = useState('01');
    const [year, yearChanged] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {baseUrl, newData} = useContext(DataContext);

    function customerIdChanged(event) {
        updateCustomerId(event.target.value);
    }

    function shipmentIdChanged(event) {
        updateShipmentId(event.target.value);
    }

    function productIdChanged(event) {
        updateProductId(event.target.value);
    }

    function quantityChanged(event) {
        updateQuantity(event.target.value);
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

    function addCustomer() {
        fetch(baseUrl+'customer/id/'+customerId).then((response) => {
            return response.json();
        }).then((data) => {
                updateCustomer(data);
        });
    }

    function addShipment() {
        fetch(baseUrl+'shipment/id/'+shipmentId).then((response) => {
            return response.json();
        }).then((data) => {
            updateShipment(data);
        })
    }

    function addProduct() {
        fetch(baseUrl+'product/id/'+productId).then((response) => {
            return response.json();
        }).then((data) => {
            updateProducts((prevState) => {
                return [{product: data, productQuantity: quantity}, ...prevState];
            })
        })
    }

    function removeProduct(id) {
        updateProducts(products.filter((productOrder) => { return productOrder.product.id !== id}));
    }

    function submit() {
        const date = year+'-'+month+'-'+day;
        const order = {customer: customer, shipment: shipment, orderDate: date, products: products};
        const json = JSON.stringify(order);
        fetch(baseUrl +'order', {method: 'POST', body: json,
            headers:{'Content-Type': 'application/json'}}).then((response) => {
            return response.json();
        }).then(data => {
            newData('order', [data]);
        });
        closeModal();
        updateCustomerId(1);
        updateCustomer({id: '', name: '', username: ''});
        updateShipmentId(1);
        updateShipment({id: '', shidDate: '', shipTime: '', bayNum: ''});
        updateProductId(1);
        updateQuantity(1);
        updateProducts([]);
        dayChanged('');
        monthChanged('01');
        yearChanged('');
    }

    return (
        <form>
            <div>
                <div>
                    <label>Customer Id:</label>
                    <input type='number' value={customerId} onChange={customerIdChanged} />
                    <div onClick={addCustomer}>
                        <OKButton text='Add Customer' />
                    </div>
                    <p>{customer.name} {customer.username}</p>
                </div>
                <div>
                    <label>Shipment Id:</label>
                    <input type='number' value={shipmentId} onChange={shipmentIdChanged} />
                    <div onClick={addShipment}>
                        <OKButton text='Add Shipment' />
                    </div>
                    <p>{shipment.shipDate} {shipment.shipTime} {shipment.bayNum}</p>
                </div>
                <div>
                    <label>Product Id:</label>
                    <input type='number' value={productId} onChange={productIdChanged} />
                    <label>Enter quantity:</label>
                    <input type='number' value={quantity} onChange={quantityChanged} />
                    <div onClick={addProduct} >
                        <OKButton text='Add Product' />
                    </div>
                    {products.map((productOrder) => (
                        <div key={productOrder.id} >{productOrder.product.name} {productOrder.product.upc} {productOrder.product.department} {productOrder.quantity}
                            <div onClick={prodId => removeProduct(productOrder.product.id)} >Remove Item</div></div>
                    ))}
                </div>
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
            <div onClick={closeModal} >
                <CancelButton text='Cancel' />
            </div>
            <div onClick={submit} >
                <OKButton text='OK' />
            </div>
        </form>
    )
}

export default PostOrderModal;