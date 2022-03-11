import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';
import './PutProductModal.css';

import {useState, useContext} from 'react';

function PutProductModal() {
    const [id, updateId] = useState(1);
    const [upc, updateUpc] = useState('');
    const [name, updateName] = useState('');
    const [aisle, updateAisle] = useState(1);
    const [row, updateRow] = useState(1);
    const [section, updateSection] = useState(1);
    const [shelf, updateShelf] = useState(1);
    const [department, updateDepartment] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {newData, baseUrl} = useContext(DataContext);

    function idChanged(event) {
        updateId(event.target.value);
    }
    
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

    function getProduct() {
        fetch(baseUrl+'product/id/'+id).then((response) => {
            return response.json();
        }).then(data => {
            updateUpc(data.upc);
            updateName(data.name);
            updateAisle(data.aisle);
            updateRow(data.row);
            updateSection(data.section);
            updateShelf(data.shelf);
            updateDepartment(data.department);
        });
    }

    function submit() {
        const product = {id: id, upc: upc, name: name, aisle: aisle, row: row,
            section: section, shelf: shelf, department: department, currentStock: 0};
        const json = JSON.stringify(product);
        fetch(baseUrl+'product/'+id, {method: 'PUT', body: json,
            headers:{'Content-Type': 'application/json'}}).then((response) => {
            return response.json();
        }).then(data => {
            newData('product', [data]);
        });
        closeModal();
        updateId(1);
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
                <div className='put_p_field'>
                    <label>Enter the id to update:</label>
                    <input type='number' value={id} onChange={idChanged} />
                </div>
                <div onClick={getProduct} className='put_p_button'>
                    <OKButton text='Find' />
                </div>
            </div>
            <div>
                <div className='put_p_field'>
                    <label>UPC:</label>
                    <input type='text' value={upc} onChange={upcChanged} />
                </div>
                <div className='put_p_field'>
                    <label>Product name:</label>
                    <input type='text' value={name} onChange={nameChanged} />
                </div>
                <div className='put_p_field'>
                    <label>Aisle:</label>
                    <input type='number' value={aisle} onChange={aisleChanged}/>
                </div>
                <div className='put_p_field'>
                <label>Row:</label>
                <input type='number' value={row} onChange={rowChanged}/>
                </div>
                <div className='put_p_field'>
                <label>Section:</label>
                <input type='number' value={section} onChange={sectionChanged}/>
                </div>
                <div className='put_p_field'>
                <label>Shelf:</label>
                <input type='number' value={shelf} onChange={shelfChanged}/>
                </div>
                <div className='put_p_field'>
                <label>Department:</label>
                <input type='text' value={department} onChange={departmentChanged}/>
                </div>
            </div>
            <div onClick={closeModal} className='put_p_button'><CancelButton text='Cancel' /></div>
            <div onClick={submit} className='put_p_button'><OKButton text='OK' /></div>
        </form>
    )

}

export default PutProductModal;