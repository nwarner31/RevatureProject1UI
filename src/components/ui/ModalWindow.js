import Card from '../ui/Card';
import './ModalWindow.css';


function ModalWindow(props) {
    
    return (
        <Card className={props.className + ' mw'}>
            {props.contents}
        </Card>
    )
}

export default ModalWindow