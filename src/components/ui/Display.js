import {useContext} from 'react';
import Product from '../Product/Product';
import Shipment from '../Shipment/Shipment';
import Customer from '../Customer/Customer';
import DataContext from '../../store/data_context';

function Display () {

    const {data} = useContext(DataContext);
    
    if(data.type === 'none') {
        return <div>No results</div>;
    }

    if(data.type === 'product'){
        return (
            <div>
                {data.items.map((product) => (
                    <Product key={product.id} id={product.id} name={product.name} upc={product.upc}
                    aisle={product.aisle} row={product.row} section={product.section} shelf={product.shelf}
                    department={product.department} />
                ))}
            </div>
        );
    }
    
    if(data.type === 'shipment'){
        return (
            <div>
                {data.items.map((shipment) => (
                    <Shipment key={shipment.id} id={shipment.id} shipDate={shipment.shipDate}
                    shipTime={shipment.shipTime} bayNumber={shipment.bayNum} />
                ))}
            </div>
        );
    }

    if(data.type === 'customer') {
        return (
            <div>
                {data.items.map((customer) => (
                    <Customer key={customer.id} id={customer.id} username={customer.username}
                    name={customer.name} />
                ))}
            </div>
        )
    }

}

export default Display;