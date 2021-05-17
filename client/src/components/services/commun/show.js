import './Style_sheet.css'
import Not from "./Notification.js"
const Show = ({ traiter, cloturé, fileinfo }) => {

    return (
        <div className="notification-container">
            <div className="notification-list">
                <Not numDoss={1}/>
                <Not numDoss={1}/>
            </div>
            
        </div>
    );

};
export default Show;