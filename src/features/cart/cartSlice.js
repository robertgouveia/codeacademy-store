//actions

export const addItem = (itemToAdd) => {
    //returns an action type and item to add
    return {
        type: 'cart/addItem',
        //an entire item
        payload: itemToAdd
    }
}

export const changeItemQuantity = (name, newQuantity) => {
    //returns an action type and an object containing a name and new quantity
    return {
        type: 'cart/changeItemQuantity',
        //just a name and a new quantity based off input
        payload: {
            name, newQuantity
        }
    }
}

//declare starting slice
const initialCart = {}
//the reducer takes a state and action, in our case the slice and action
export const cartReducer = (cart = initialCart, action) => {
    switch(action.type){
        case 'cart/addItem': {
            //we collect the items variables
            const {name, price} = action.payload

            //if the item exists then increase the quantity or set quantity to 1
            const quantity = cart[name] ? cart[name].quantity + 1 : 1;
            //we now have an object garenteed in the cart with at least the name: quantity however we need to ensure a price
            const newItem = {price, quantity};
            //we now have a new object set to only the {price and quantity}

            //now we need to add this to the cart
            return {
                ...cart,
                [name]: newItem
            }
            //as you can see we manipulate the cart to either add or change the item based off the name to include the price and quantity
        }
        case 'cart/changeItemQuantity':{
            const {name, newQuantity} = action.payload
            //collection of the name and new quantity from the payload

            //we find the item by setting the item to the object found in cart and only its internals
            const itemToUpdate = cart[name]

            //we set the updated item equal to the item to updates internals but amend the quantity to the new quantity
            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity
            }

            //we then recreate the cart however amending the name set to the new updated internals
            return {
                ...cart,
                [name]: updatedItem
            }
        }
        default: {
            return cart
        }
    }
}