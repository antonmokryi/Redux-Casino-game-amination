import React from 'react';
import SlotItem from "./SlotItem/SlotItem.jsx";
import {casinoSelector} from "../../tasks/selector.js";
import {useSelector} from "react-redux";
import './SlotItem/style.css'
const Slot = () => {
    const casino = useSelector(casinoSelector)
    let showIcons = casino.spinResult.length > 0 ? casino.spinResult : casino.slotIcons
    return (
        <>
            <ul className="grid grid-cols-3 gap-2 bg-gray-800 p-4 rounded-xl text-center text-3xl font-mono">
                {showIcons.map(item => <li key={item.id} >
                    <SlotItem item={item}/>
                </li>)}
            </ul>
        </>
    );
};

export default Slot;