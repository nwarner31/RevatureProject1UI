import './CalendarDate.css'

function CalendarDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    const classes = 'calendar_date ' +props.className;

    
    return (
        <div className={classes}>
            <div className='cd_year'>{year}</div>
            <div className='cd_month'>{month}</div>
            <div className='cd_day'>{day}</div>
        </div>
    )

}

export default CalendarDate;