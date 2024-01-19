import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    money: 10000,
    full_price: 0,
    bought_id: [],
    bought_name: [],
    bought_price: [],
    disabled_IDs: [],
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addNewBought: (state, action) => {   
        if (!(state.disabled_IDs.includes(action.payload.id)) && action.payload.price <= (state.money - state.full_price)){
        state.bought_id.push(action.payload.id);
        state.bought_name.push(action.payload.name);
        state.bought_price.push(action.payload.price);
        state.disabled_IDs.push(action.payload.id)
        state.full_price += action.payload.price;
        }else{
            console.log(action.payload.id)
        }
    },
    buyItemWithoutCart: (state, action) => {
        if (state.money - action.payload < 0){
            console.log('Sorry, but you haven`t got enough money.')
        }
        else{
            state.money -= action.payload;
        }
    },
    buyItemsInCart: (state) => {
        state.bought_id = [];
        state.bought_name = [];
        state.bought_price = [];
        state.money -= state.full_price;
        state.full_price = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewBought, buyItemWithoutCart, buyItemsInCart } = shopSlice.actions

export default shopSlice.reducer