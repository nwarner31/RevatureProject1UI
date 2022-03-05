import './Page.css';
import Card from './Card';
import Product from '../Product';
import Shipment from '../Shipment';
import MenuButton from './MenuButton';
import ProductButtons from '../Product/ProductButtons';

function Page(props){

    return (
        <Card className='page'>
            <Card className='menu'>
                <ProductButtons />
                <MenuButton className='prod_button'/>
                <MenuButton />
                <MenuButton />
            </Card>
            <Card className='display'>
                <Product id='1' name='Paw Patrol Skye Plush' location='6' />
                <Product id='5' name='Paw Patrol Chase Plush' location='10' />
                <Shipment id='1' date={new Date('2022-02-28')} />
            </Card>
        </Card>
    )
}

export default Page