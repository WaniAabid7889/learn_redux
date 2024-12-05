import {Add_To_Cart, Remove_To_Cart} from '../constants.js';
export const addToCart=(data)=>{
    console.log("action",data);
    return {
        type:Add_To_Cart,
        data : data
    }
}

export const removeToCart=(data)=>{
    return{
        type : Remove_To_Cart,
        data : data
    }
}