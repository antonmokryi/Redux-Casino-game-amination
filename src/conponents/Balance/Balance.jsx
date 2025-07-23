import React from 'react';
import {useSelector} from "react-redux";
import {slotBalanceSelector} from "../../tasks/selector.js";

const Balance = () => {
    const balance = useSelector(slotBalanceSelector)
    return (
        <>
            <div className="flex justify-between items-center text-lg font-semibold">
                <span>🎰 Казино</span>
                <span>Баланс: <span className="text-green-400 font-bold">{balance}</span></span>
            </div>
        </>
    );
};

export default Balance;