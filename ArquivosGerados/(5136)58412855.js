    import React from 'react';&#xD;&#xA;    import classes from './Order.css';&#xD;&#xA;    import axios from '../../axios-orders';&#xD;&#xA;    const order = ( props ) => {&#xD;&#xA;    const restult = () => {&#xD;&#xA;    return (  props.details.map((item,i)=>&#xD;&#xA;    <tr key={item.id}>&#xD;&#xA;    <td>{i+1}</td>&#xD;&#xA;    <td>{item.orderData.name}</td>&#xD;&#xA;    <td>{item.orderData.email}</td>&#xD;&#xA;    <td>{item.orderData.street}</td>&#xD;&#xA;    <td>{item.orderData.zipCode}</td>&#xD;&#xA;    <td>{item.orderData.country}</td>&#xD;&#xA;    <td><button onClick={() => deleteHandler(item.id)} >Delete</button></td>&#xD;&#xA;    </tr>&#xD;&#xA;    )&#xD;&#xA;    )&#xD;&#xA;    }&#xD;&#xA;    const deleteHandler = (itemId) => {&#xD;&#xA;    axios&#xD;&#xA;    .delete('https://react-my-project-912f7.firebaseio.com/orders.json/-LrJSCvoqEKoM1BAfgOV')&#xD;&#xA;    .then(res => {&#xD;&#xA;        console.log(res);&#xD;&#xA;    })&#xD;&#xA;    .catch(err => {&#xD;&#xA;      console.log(err);&#xD;&#xA;    });&#xD;&#xA;} &#xD;&#xA;    return (&#xD;&#xA;    <div className={classes.Order}>&#xD;&#xA;    <table className={classes.students}>&#xD;&#xA;    <thead>&#xD;&#xA;    <tr>&#xD;&#xA;    <th>Sno</th>&#xD;&#xA;    <th>Name</th>&#xD;&#xA;    <th>Email</th>&#xD;&#xA;    <th>Street</th>&#xD;&#xA;    <th>ZipCode</th>&#xD;&#xA;    <th>Country</th>&#xD;&#xA;    <th>Action</th>&#xD;&#xA;    </tr>&#xD;&#xA;    </thead>&#xD;&#xA;    <tbody>&#xD;&#xA;    { restult() }&#xD;&#xA;    </tbody>&#xD;&#xA;    </table>&#xD;&#xA;    </div>&#xD;&#xA;    );&#xD;&#xA;    };&#xD;&#xA;    export default order;