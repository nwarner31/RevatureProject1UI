import {useState} from 'react';

import './ProductButtons.css';
import MenuButton from '../ui/MenuButton';

function ProductButtons() {
    const [isShown, setShown] = useState('hidden');


    function menuClicked() {
        const show = isShown === 'hidden' ? 'shown' : 'hidden';
        setShown(show);
        console.log('Clicked');
    }

    return(
        <div>
            <MenuButton click={menuClicked} className='main_button'/>
            <MenuButton className={isShown + ' sub_button'} />
        </div>
    )


}

export default ProductButtons;