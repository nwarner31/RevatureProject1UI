import './CalendarDate.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function CalendarDate(props) {
    const dateParts = props.date.split('-');

    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();
     const classes = 'calendar_date ' +props.className;


    
    return (
        <div className={classes}>
            <div className='cd_year'>{dateParts[0]}</div>
            <div className='cd_month'>{months[dateParts[1] - 1]}</div>
            <div className='cd_day'>{dateParts[2]}</div>
        </div>
    )

}

export default CalendarDate;