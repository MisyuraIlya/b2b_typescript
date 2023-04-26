import {ICart} from '../../models/cart.interface';
const NAME_ITEM="cart";

const setCart=(products:ICart)=>{
    console.log(products)
  window.localStorage.setItem(NAME_ITEM, JSON.stringify(products));
}
const getCart=()=>{
  let items = window.localStorage.getItem(NAME_ITEM);
  return items ? JSON.parse(items) : null;
}
const addItem=(item:ICart)=>{
  const data=getCart();
  if(!data)
    window.localStorage.setItem(NAME_ITEM,JSON.stringify([item]));
  else{
    data.push(item)
    window.localStorage.setItem(NAME_ITEM,JSON.stringify(data));
  }
}
// const removeItem=(id:number)=>{
//   let items=getCart();
//   const newItems = items.filter(x=>x.Id!==id);
//   window.localStorage.setItem(NAME_ITEM, JSON.stringify(newItems));
// }
// const editItem=(item:number)=>{
//   let items=getCart();
//   for(let i=0;i<items.length;i++){
//     if(items[i].Id==item.Id){
//       items[i]={ ...item };
//       break;
//     }
//   }
//   window.localStorage.setItem(NAME_ITEM, JSON.stringify(items));
// }
const clear=()=>{
  window.localStorage.removeItem(NAME_ITEM);
}
// const getItem=(id:number)=>{
//   const cart=getCart();
//   return (cart ? cart.find(x=>x.Id==id) : null);
// }

const cartLocalStorage = {
  getCart: getCart,
  // getItem: getItem,
  addItem: addItem,
  // removeItem: removeItem,
  clear: clear,
  // editItem: editItem,
  setCart: setCart
}

export default cartLocalStorage;