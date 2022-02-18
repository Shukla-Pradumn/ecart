import React, { useState } from 'react';
import { userAuth, userPass } from '../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    return (
        <form>
            <label for="inputEmail3">Email</label>
            <div className="col-sm-10">
                <input type="email" id="inputEmail3" placeholder="Enter Email"  />
            </div>
            <label for="inputEmail3">Email</label>
            <div className="col-sm-10">
                <input type="email" id="inputEmail3" placeholder="Enter Email" onChange={(e) => dispatch(userAuth(e.target.value))} />
            </div>
            <label for="inputEmail3">Password</label>
            <div className="col-sm-10">
                <input type="password" id="inputEmail3" placeholder="Enter Password" onChange={(e) => dispatch(userPass(e.target.value))} />
            </div>
            <button>Login</button>
        </form>
    )
}