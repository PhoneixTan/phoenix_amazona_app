import { createContext,useReducer } from "react";

export const Store=createContext();


//  默认情况下购物车为空
const initialState={
    cart:{cartItems:[]},

};

function reducer(state,action){
    //check the action.type
    switch(action.type){
        case "CART_ADD_ITEM":{
            const newItem = action.payload;
            // existItem gets that item if existItem exists
            const existItem=state.cart.cartItems.find(
                (item)=>item.slug === newItem.slug
            );
            // map:检查购物车中的每个项目 
            const cartItems=existItem? state.cart.cartItems.map((item)=>
            item.name === existItem.name ? newItem :item
            ):
            [...state.cart.cartItems,newItem];
            return {...state,cart:{...state.cart,cartItems}
            }
           
        }
        //删除状态
        case 'CART_REMOVE_ITEM':{
            //filer 筛选列表
                const cartItems=state.cart.cartItems.filter(
                    //基于item的slug退回
                    (item)=>item.slug !==action.payload.slug
                );
                //返回购物车中先前的状态，通过这一行更新context状态
                return {...state,cart:{...state.cart,cartItems}}
            }
        //对于默认情况，仅返回状态，reducer函数
        default:
            return state;
    }
}

export function StoreProvider({children}){
    //reducer传递reducer函数 
    const [state,dispatch]=useReducer(reducer,initialState)
    const value ={ state,dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}