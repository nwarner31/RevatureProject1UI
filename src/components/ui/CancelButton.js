import Card from './Card'
import './CancelButton.css';

function CancelButton(props) {
    return (
    <Card className='cb'>
        {props.text}
    </Card>
    );
}

export default CancelButton;