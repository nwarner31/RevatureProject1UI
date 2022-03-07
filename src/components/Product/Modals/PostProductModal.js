import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';

function PostProductModal() {

    return (
        <form>
            <div>
                <label>UPC:</label>
                <input type='text'/>
                <label>Product name:</label>
                <input type='text'/>
                <label>Aisle:</label>
                <input type='number'/>
                <label>Row:</label>
                <input type='number'/>
                <label>Section:</label>
                <input type='number'/>
                <label>Shelf:</label>
                <input type='number'/>
                <label>Department:</label>
                <input type='text'/>
            </div>
            <div><CancelButton text='Cancel' /></div>
            <div><OKButton text='OK' /></div>
        </form>
    )
}

export default PostProductModal;