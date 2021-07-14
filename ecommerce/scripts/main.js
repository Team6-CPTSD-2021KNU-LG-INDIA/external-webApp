import {DBaccess, fakeDB} from './DBaccess.js';
import {myCart} from './myCart.js';

let DB=null;

function updateItemList(){
    const itemList = DB.getItemList();
    let target = document.getElementById("itemlist");
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }
    const keylist = Object.keys(itemList);

    keylist.forEach((key)=>{
        let itemElement=document.createElement("div");
        itemElement.style=`
            // width:${document.getElementById("itemlist").offsetWidth/10}px;
            // height:${document.getElementById("itemlist").offsetWidth/10}px;
            width:150px;
            height:150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;
        let name = document.createElement("div");
        name.innerHTML=key;
        let image = document.createElement("div");
        image.style=`
            height: 70%;
            width: 70%;
            background-image: url(${itemList[key].imageurl});
            background-size: 100% 100%;
        `;
        let price = document.createElement("div");
        price.innerHTML=`price:${itemList[key].price}$`;
        price.style=`
            display: flex;
            flex-direction: row;
        `;
        let temp =document.createElement("input");
        temp.style=`
            background-image: url("../source/cart.png");
            background-size: cover;
        `;
        temp.type="button";
        temp.name=key;
        temp.addEventListener("click",(e)=>{
            alert(`${e.target.name} added!`);
            myCart.addItem(e.target.name);
            updateCartList();
        },false)
        price.appendChild(temp);
        let rate = document.createElement("div");
        if (itemList[key].score == 0)
            rate.innerHTML=`rate:0.00`;
        else
            rate.innerHTML=`rate:${Math.round((itemList[key].score/itemList[key].rateNum)*100)/100}`;
        rate.style=`
            display: flex;
            flex-direction: row;
        `;
        temp =document.createElement("input");
        temp.value="+1"; temp.type="button";
        temp.name=key;
        temp.addEventListener("click",(e)=>{
            let obj = {};
            obj[e.target.name]={
                score:itemList[e.target.name].score+1,
                rateNum:itemList[e.target.name].rateNum+1,
            }
            fakeDB.updateItemList(obj)
            updateItemList();
        },false)
        rate.appendChild(temp);
        temp =document.createElement("input");
        temp.value="-1"; temp.type="button";
        temp.name=key;
        temp.addEventListener("click",(e)=>{
            let obj = {};
            obj[e.target.name]={
                score:itemList[e.target.name].score-1,
                rateNum:itemList[e.target.name].rateNum+1,
            }
            fakeDB.updateItemList(obj)
            updateItemList();
        },false)
        rate.appendChild(temp);

        itemElement.appendChild(name);
        itemElement.appendChild(image);
        itemElement.appendChild(price);
        itemElement.appendChild(rate);

        target.appendChild(itemElement);
    });
}

function updateCartList(){
    let total = 0;
    const cartList = myCart.getList();
    const itemList = DB.getItemList();
    const target = document.getElementById("cartContents");
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }
    const keylist = Object.keys(cartList);

    keylist.forEach((key)=>{
        let itemElement=document.createElement("div");
        itemElement.style=`
            // width:${document.getElementById("itemlist").offsetWidth/10}px;
            // height:${document.getElementById("itemlist").offsetWidth/10}px;
            width:150px;
            height:150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;
        let name = document.createElement("div");
        name.innerHTML=key;
        let image = document.createElement("div");
        image.style=`
            height: 70%;
            width: 70%;
            background-image: url(${itemList[key].imageurl});
            background-size: 100% 100%;
        `;
        let price = document.createElement("div");
        price.innerHTML=`price:${itemList[key].price}$`;
        let count = document.createElement("div");
        count.innerHTML=`count:${cartList[key]}`;
        total += itemList[key].price*cartList[key];
        itemElement.appendChild(name);
        itemElement.appendChild(image);
        itemElement.appendChild(price);
        itemElement.appendChild(count);

        target.appendChild(itemElement);
    });
    console.log(total);
    document.getElementsByClassName("total")[0].innerHTML=`total price:${total}$`
}

((isWebOS)=>{
    if(isWebOS){
        DB=DBaccess;
    }
    else{
        DB=fakeDB;
    }
    document.getElementById("buybutton").addEventListener("click",()=>{
        myCart.itemList={};
        updateCartList();
    },false);
    updateItemList();
})(false)
