import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
        name: 'cart',
        initialState: {
                sidebar: false,
                cartItems: [],
                itemsTotalQuantity: 0,
                itemsTotalPrice: 0
        },
        reducers: {
                openSidebar: (state, action) => {
                        state.sidebar = action.payload;
                },
                closeSidebar: (state, action) => {
                        state.sidebar = action.payload;
                },
                addItemToCart: (state, action) => {
                        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

                        if (itemIndex >= 0) {
                                state.cartItems[itemIndex].itemQuantity += 1;
                        } else {
                                state.cartItems.push({ ...action.payload, itemQuantity: 1 });
                        }
                },
                total: (state) => {
                        const { totalQuantity, totalPrice } = state.cartItems.reduce((totalItems, item) => {
                                const { itemQuantity, price } = item;
                                const itemPrice = itemQuantity * price;

                                totalItems.totalQuantity += itemQuantity;
                                totalItems.totalPrice += itemPrice;

                                return totalItems;

                        }, {
                                totalQuantity: 0,
                                totalPrice: 0
                        })
                        state.itemsTotalQuantity = totalQuantity;
                        state.itemsTotalPrice = totalPrice;
                },
                increaseQuantity: (state, action) => {
                        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

                        if (itemIndex >= 0) {
                                state.cartItems[itemIndex].itemQuantity += 1;
                        }
                },
                decreaseQuantity: (state, action) => {
                        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

                        if (state.cartItems[itemIndex].itemQuantity > 1) {
                                state.cartItems[itemIndex].itemQuantity -= 1;
                        }
                },
                removeItem: (state, action) => {
                        const otherItems = state.cartItems.filter(item => item.id !== action.payload.id);
                        state.cartItems = otherItems;
                },
                removeAllItems: (state) => {
                        state.cartItems = [];
                }

        }
})


export const { openSidebar, closeSidebar, addItemToCart, total, decreaseQuantity, removeAllItems,
        increaseQuantity, decreaseQuantiy, removeItem } = CartSlice.actions;


export default CartSlice;