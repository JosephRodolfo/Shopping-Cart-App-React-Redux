import React from "react";
import ShopItemCard from "./ShopItemCard";
import bike from "../assets/bike.png";
import { connect } from "react-redux";
import selectItems from "../selectors/items";

const ShopPage = (props) => {
  console.log(props);

  let handleAddItemParent = (item) => {
    props.handleAddItemParent(item);
  };

  return (
    <div className="shop-products-container">
      {props.items.map((element) => {
        //   console.log(props.expenses);
        return <ShopItemCard handleAddItemParent={handleAddItemParent} key={element.id} {...element} />;
      })}

      {/* <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={100} name="Bike"/>
      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={200}  name="Helmet"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={240} name="Pedal"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={230} name="Seat"/> */}
    </div>
  );
};
//export default ShopPage;

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items),
  };
};

export default connect(mapStateToProps)(ShopPage);
