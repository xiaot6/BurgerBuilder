import React, { Component } from 'react';

import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"
import Spinner from "../../../components/UI/Spinner/Spinner";

import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        },
        loading: false

    }

    OrderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    street: "Test street",
                    zipcode: "11111",
                    country: "USA"
                },
                email: "test@test.com"
                
            },
            deliveryMethods: "fastest"
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Your Address" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType = "Success" clicked={this.OrderHandler}> Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className = "ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}


export default ContactData;