import './MenuButton.css';
import Card from './Card';

function MenuButton(props) {
    const classes = "menu_button " + props.className;
    return (
        <div onClick={props.click}>
            <Card className={classes}>{props.title}</Card>
        </div>
        
    )
}

export default MenuButton;