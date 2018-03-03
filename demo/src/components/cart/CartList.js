import React, {PropTypes} from 'react';
import Dish from './Dish';

const CartList = ({dishList}) => {
  return (
    <div>
      {dishList.map(dish=> <Dish {...dish} />)}

    </div>
  );
};

CartList.propTypes = {
  dishList: PropTypes.array.isRequired
};
export default CartList;
