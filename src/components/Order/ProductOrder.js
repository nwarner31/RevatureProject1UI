import './ProductOrder.css';
import Card from '../ui/Card';

function ProductOrder(props) {

    return (
        <Card className={props.className+' product_order'}>
            <div className='po_id' >{props.product.id}</div>
            <div className='po_info'>
                <div>{props.product.name}</div>
                <div>{props.product.upc}</div>
            </div>
            <div className='po_quantity' >{props.quantity}</div>
        </Card>
    )
}

export default ProductOrder;