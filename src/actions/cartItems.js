

//add items
export const addItem = ({
    picture = "",
    name = "",
    price = 0,
    quantity = 0,
  } = {}) => ({
    type: "ADD_ITEM",
    expense: {
      id: uuid(),
      picture,
      name,
      price,
      quantity,
    },
  });
  //REMOvE_EXPENSE
  
 export const removeItem = ({ id } = {}) => ({
    id,
  
    type: "REMOVE_ITEM",
  });
  
  //EDIT_EXPENSE
  
 export const editItem = (id, updates) => ({
    type: "EDIT_ITEM",
    id,
    updates,
  });