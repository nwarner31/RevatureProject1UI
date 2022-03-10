import './Product.css';
import Card from '../ui/Card';

function Product(props) {

    return (
      <Card className="product">
          <div className="product_id">
              {props.id}
          </div>
          <div className='product_card' >
              <div class='product_info'>
                  <div className="product_name">
                      {props.name}
                  </div>
                  <div className='product_data'>
                      <div>
                         UPC: {props.upc}
                      </div>
                      <div>
                         Department: {props.department}
                      </div>
                  </div>
              </div>

              <div className="product_location">
                  Aisle: {props.aisle} Row: {props.row} Section: {props.section} Shelf: {props.shelf}
              </div>
          </div>
          
      </Card>
    );
}

export default Product;