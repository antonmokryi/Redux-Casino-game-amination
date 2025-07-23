import React from 'react';
import {useDispatch} from "react-redux";
import {endAnimationAction, startAnimationAction, trySpinAction} from "../../tasks/action.js";

const SpinBtn = () => {
    const dispatch = useDispatch()
    async function handleSpin(){
        dispatch(startAnimationAction())
        setTimeout(()=>{
            dispatch(trySpinAction())
            dispatch(endAnimationAction())
        }, 1000)
    }
    return (
        <>
            <div className="text-center">
                <button
                    onClick={()=>handleSpin()}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-6 py-2 rounded-full shadow-md transition duration-300">
                    🔄 Прокрутити
                </button>
            </div>
        </>
    );
};

export default SpinBtn;