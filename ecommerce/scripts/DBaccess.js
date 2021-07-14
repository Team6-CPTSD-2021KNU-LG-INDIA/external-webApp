const fakeDB={};

fakeDB.itemList={
    apple:{
        imageurl:"../source/itemImage/apple.jpg",
        price:0.7,
        score:0,
        rateNum:0,
    },
    bike:{
        imageurl:"../source/itemImage/bike.jpg",
        price:300,
        score:0,
        rateNum:0,
    },
    bowl:{
        imageurl:"../source/itemImage/bowl.jpg",
        price:3,
        score:0,
        rateNum:0,
    },
    cheese:{
        imageurl:"../source/itemImage/cheese.jpg",
        price:2,
        score:0,
        rateNum:0,
    },
    coke:{
        imageurl:"../source/itemImage/coke.jpg",
        price:2,
        score:0,
        rateNum:0,
    },
    glasses:{
        imageurl:"../source/itemImage/glasses.jpg",
        price:50,
        score:0,
        rateNum:0,
    },
    keyboard:{
        imageurl:"../source/itemImage/keyboard.jpg",
        price:12,
        score:0,
        rateNum:0,
    },
    mask:{
        imageurl:"../source/itemImage/mask.jpg",
        price:1.2,
        score:0,
        rateNum:0,
    },
    milk:{
        imageurl:"../source/itemImage/milk.jpg",
        price:1.5,
        score:0,
        rateNum:0,
    },
    mouse:{
        imageurl:"../source/itemImage/mouse.jpg",
        price:5,
        score:0,
        rateNum:0,
    },
    soap:{
        imageurl:"../source/itemImage/soap.jpg",
        price:0.5,
        score:0,
        rateNum:0,
    },
    tape:{
        imageurl:"../source/itemImage/tape.jpg",
        price:0.9,
        score:0,
        rateNum:0,
    },
    tissuepaper:{
        imageurl:"../source/itemImage/tissuepaper.jpg",
        price:1.1,
        score:0,
        rateNum:0,
    },
    tshirts:{
        imageurl:"../source/itemImage/tshirts.jpg",
        price:12,
        score:0,
        rateNum:0,
    },
    water:{
        imageurl:"../source/itemImage/water.jpg",
        price:0.7,
        score:0,
        rateNum:0,
    },
};
fakeDB.getItemList=()=>{
    return fakeDB.itemList;
}
fakeDB.updateItemList=(obj)=>{
    Object.keys(obj).forEach(item=>{
        Object.keys(obj[item]).forEach((prop)=>{
            fakeDB.itemList[item][prop] = obj[item][prop];
        });
    });
}


//
const DBaccess={};

DBaccess.metadata={};
DBaccess.metadata.baseOS="webOS";

DBaccess.getItemList=()=>{
    
}
DBaccess.updateItemList=()=>{
    
}

export {DBaccess,fakeDB}