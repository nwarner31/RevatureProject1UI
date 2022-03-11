import {useState, useContext} from 'react';
import './Page.css';
import Card from './Card';
import ProductButtons from '../Product/ProductButtons';
import ShipmentButtons from '../Shipment/ShipmentButtons';
import CustomerButtons from '../Customer/CustomerButtons';
import OrderButtons from '../Order/OrderButtons';
import Display from './Display';


function Page(){
   const [shownButtons, updateShownButtons] = useState('none');

   function changeShown(toShow) {
       updateShownButtons(toShow);
   }
    return (
        <Card className='page'>
            <Card className='menu'>
                <ProductButtons shown={shownButtons} updateShown={changeShown} />
                <ShipmentButtons shown={shownButtons} updateShown={changeShown} />
                <CustomerButtons shown={shownButtons} updateShown={changeShown} />
                <OrderButtons shown={shownButtons} updateShown={changeShown} />
            </Card>
            <Card className='display' id='display_page'>
                <Display  />
                
            </Card>
        </Card>
    )
}

export default Page