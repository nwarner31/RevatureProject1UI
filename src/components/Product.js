import './Product.css';
import Card from './ui/Card';

function Product(props) {

    return (
      <Card className="product">
          <div className="product_id">
              {props.id}
          </div>
          <div >
              <div className="product_name">
                  {props.name}
              </div>
              <div className="product_location">
                  Location: {props.location}
              </div>
          </div>
          
      </Card>
    );
}

export default Product;