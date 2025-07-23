import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeBetAction} from "../../tasks/action.js";
import {betSelector} from "../../tasks/selector.js";

const Bet = () => {
    const dispatch = useDispatch()
    const bet = useSelector(betSelector)
    return (
        <>
            <div className="flex items-center justify-between">
                <span className="text-lg">Ставка:</span>
                <div className="flex items-center gap-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xl"
                    onClick={()=>dispatch(changeBetAction("-"))}
                    >-</button>
                    <span className="text-xl font-bold">{bet}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xl"
                            onClick={()=>dispatch(changeBetAction("+"))}
                    >+
                    </button>
                </div>
            </div>
        </>
    );
};

export default Bet;