import React from 'react';
import './style.css'
import {useSelector} from "react-redux";
import {casinoSelector} from "../../../tasks/selector.js";
const SlotItem = ({item}) => {
    const casino = useSelector(casinoSelector)
    let animationStyle = casino.isActiveAnimation ? "animateSpinSlot" : ""

    return (

            <div className=" relative h-20 rounded-xl py-4  p-2 flex justify-center bg-black  overflow-hidden">
                <img
                    key={`${item.name}-${Date.now()}`} src={item.img} alt={item.name}
                    className={`absolute top-0 left-0 w-full h-20 object-contain  z-0 ${animationStyle}`}/>
            </div>

    );
};

export default SlotItem;