import Card from './Card'
import './OKButton.css';

function OKButton(props) {
    return (
        <Card className='ob'>
            {props.text}
        </Card>
    );
}

export default OKButton;