import React from "react";
import ShopOverlay from "./components/ShopOverlay/ShopOverlay";
import Posts from "./components/Posts/Posts";
import { useSelector } from "react-redux";


const App = () => {
    const myMoney = useSelector(state => state.shop.money);
        return (
            <div>
                <div className="money">{myMoney}$</div>
                <div className='shop'>
                    <div >
                        <ShopOverlay/>
                    </div>
                </div>
                <Posts/>
            </div>
        )
};

export default App;
