import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';


// Get users 
        // loop through users find user by email( user.password == req.body.email)
        // validate the password (user.password == req.body.passowrd)
        //if successful, then return the user


    @Injectable({
        providedIn: 'root'
        })

export class AuthService {}

    constructor(){ 

    }

    login(authUser) {}

        
        