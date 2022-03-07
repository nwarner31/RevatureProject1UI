import {useState, useContext} from 'react';
import './Page.css';
import Card from './Card';
import ProductButtons from '../Product/ProductButtons';
import ShipmentButtons from '../Shipment/ShipmentButtons';
import CustomerButtons from '../Customer/CustomerButtons';
import Display from './Display';


function Page(){
    
    return (
        <Card className='page'>
            <Card className='menu'>
                <ProductButtons  />
                <ShipmentButtons />
                <CustomerButtons />
            </Card>
            <Card className='display' id='display_page'>
                <Display  />
                
            </Card>
        </Card>
    )
}

export default Page