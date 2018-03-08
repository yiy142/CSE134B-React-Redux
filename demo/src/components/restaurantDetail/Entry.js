import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import '../../styles/restaurantDetail.css';

// for the dishes
let key = 0;

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.state = {
            img: this.props.img,
            name: this.props.name,
            price: this.props.price,
            method: this.props.method
        };
    }

    saveToLocalStorage(name, price, img) {
        let newDish = [];
        // make a unique key to refer to entries!
        key++;
        let trueKey = "" + key + name;
        // nothing added yet
        if(JSON.parse(localStorage.getItem("dishes")) === null) {
            newDish = [];
        }
        else {
            newDish = JSON.parse(localStorage.getItem("dishes"));
        }
        newDish.push({key: trueKey, name: name, price: price, img: img});
        localStorage.setItem("dishes", JSON.stringify(newDish));
    }

    // if you want to pass in the dish as an obj...
    saveToLocalStorageDish(dish) {

    }

    render() {
        return (
            <div className="selectionR">
                <div className="itemInfoR">
                    <img className="food_image" src={this.state.img} alt="a picture of the product" width="300" height="230" />
                    <p><b>{this.state.name}</b></p>
                    <p>${this.state.price}</p>
                    <form className="amount">
                        Amount:<br />
                        <input type="text" name="amount" />
                        <br />
                    </form>
                    <button onClick={() => this.saveToLocalStorage(this.state.name, this.state.price, this.state.img)}
                        className="button_orange" > add to cart </button>
                </div>
            </div>
        );
    }
}

Entry.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    method:PropTypes.string
};

export default Entry;