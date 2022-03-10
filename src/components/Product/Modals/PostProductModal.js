import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useState, useContext} from 'react';

function PostProductModal() {
    const [upc, updateUpc] = useState('');
    const [name, updateName] = useState('');
    const [aisle, updateAisle] = useState(1);
    const [row, updateRow] = useState(1);
    const [section, updateSection] = useState(1);
    const [shelf, updateShelf] = useState(1);
    const [department, updateDepartment] = useState('');
    
    const {closeModal} = useContext(ModalContext);
    const {newData, baseUrl} = useContext(DataContext);

    function upcChanged(event) {
        updateUpc(event.target.value);
    }

    function nameChanged(event) {
        updateName(event.target.value);
    }

    function aisleChanged(event) {
        updateAisle(event.target.value);
    }

    function rowChanged(event) {
        updateRow(event.target.value);
    }

    function sectionChanged(event) {
        updateSection(event.target.value);
    }

    function shelfChanged(event) {
        updateShelf(event.target.value);
    }

    function departmentChanged(event) {
        updateDepartment(event.target.value);
    }
    
    function submit() {
        const product = {upc: upc, name: name, aisle: aisle, row: row,
            section: section, shelf: shelf, department: department, currentStock: 0};
        const json = JSON.stringify(product);
        fetch(baseUrl+'product', {method: 'POST', body: json,
            headers:{'Content-Type': 'application/json'}}).then((response) => {
            return response.json();
        }).then(data => {
            newData('product', [data]);
        });
        closeModal();
        updateUpc('');
        updateName('');
        updateAisle(1);
        updateRow(1);
        updateSection(1);
        updateShelf(1);
        updateDepartment('');
    }
    return (
        <form>
            <div>
                <label>UPC:</label>
                <input type='text' value={upc} onChange={upcChanged}/>
                <label>Product name:</label>
                <input type='text' value={name} onChange={nameChanged}/>
                <label>Aisle:</label>
                <input type='number' value={aisle} onChange={aisleChanged}/>
                <label>Row:</label>
                <input type='number' value={row} onChange={rowChanged}/>
                <label>Section:</label>
                <input type='number' value={section} onChange={sectionChanged}/>
                <label>Shelf:</label>
                <input type='number' value={shelf} onChange={shelfChanged}/>
                <label>Department:</label>
                <input type='text' value={department} onChange={departmentChanged}/>
            </div>
            <div onClick={closeModal}><CancelButton text='Cancel' /></div>
            <div onClick={submit}><OKButton text='OK' /></div>
        </form>
    )
}

export default PostProductModal;