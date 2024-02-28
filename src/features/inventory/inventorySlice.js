//import data for now from file
import {inventoryData} from "../../data";

//actions
export const loadData = (data) => {
    //currently fixed to returning inventory data
    return {
        type: 'inventory/loadData',
        payload: inventoryData
    }
}

//reducer
const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
    //if the inventory load data action has been called just return the data
    switch (action.type){
        case 'inventory/loadData':{
            return action.payload;
        }
        default:{
            return inventory
        }
    }
}