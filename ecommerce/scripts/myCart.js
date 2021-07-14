import {DBaccess, fakeDB} from './DBaccess.js';

const myCart={};

myCart.itemList={}
myCart.addItem=(item)=>{
    if (myCart.itemList[item] == undefined)
        myCart.itemList[item] = 1;
    else
        myCart.itemList[item] += 1;

    console.log(myCart.itemList);
}
myCart.getList=()=>{
    return myCart.itemList;
}

export {myCart};