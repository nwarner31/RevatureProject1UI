import OKButton from '../../ui/OKButton';
import CancelButton from '../../ui/CancelButton';
import ModalContext from '../../../store/modal_context';
import DataContext from '../../../store/data_context';

import {useContext, useState} from 'react';

function DeleteProductModal() {
    const [id, updateId] = useState(1);
    const [upc, updateUpc] = useState('');
    const [name, updateName] = useState('');
    const [aisle, updateAisle] = useState('');
    const [row, updateRow] = useState('');
    const [section, updateSection] = useState('');
    const [shelf, updateShelf] = useState('');
    const [department, updateDepartment] = useState('');

    const {closeModal} = useContext(ModalContext);
    const {baseUrl} = useContext(DataContext);

    function idChanged(event) {
        updateId(event.target.value);
    }
    
    function findProduct() {
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
        const promise = fetch(baseUrl+'product/'+id, {method: 'DELETE', body: json,
            headers:{'Content-Type': 'application/json'}});
        promise.then((response) => {
            alert('Deleted successfully');
        });
        promise.catch((response) => {
            alert('There was a problem. Delete failed.');
        });
        closeModal();
    }

    return (
        <form>
            <div>
                <div>
                    <label>Enter the id to delete:</label>
                    <input type='number' value={id} onChange={idChanged} />
                    <div onClick={findProduct}>
                        <OKButton text='Find' />
                    </div>
                </div>
                <div>
                    <div>
                        <p>UPC: {upc}</p>
                        <p>Product name: {name}</p>
                        <p>Aisle: {aisle}</p>
                        <p>Row: {row}</p>
                        <p>Section: {section}</p>
                        <p>Shelf: {shelf}</p>
                        <p>Department: {department}</p>
                    </div>
                </div>
                <div onClick={closeModal} >
                    <CancelButton text='Cancel' />
                </div>
                <div onClick={submit} >
                    <OKButton text='Delete' />
                </div>
            </div>
        </form>
    )
}

export default DeleteProductModal;