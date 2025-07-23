import {createReducer} from "@reduxjs/toolkit";
import slotSymbols from "../json/symbols.json"
import {changeBetAction, endAnimationAction, startAnimationAction, trySpinAction} from "./action.js";
import {calculatorWin} from "../functions/calculatorWin.js";

const initialState = {
    slotIcons: slotSymbols,
    bonus: [],
    spinResult: [],
    balance: 1000,
    bet: 10,
    minBet: 2,
    maxBet: 100,
    win: 0,
    isActiveWin: false,
    isActiveAnimation: false
}

function startAnimation(state){
    return{...state, isActiveAnimation: true}
}
function endAnimation(state){
    return{...state, isActiveAnimation: false}
}
function trySpin (state) {
    let balanceAfterBet = state.balance - state.bet
    let randomSpin = []
    if (balanceAfterBet >= 0) {
        for (let i = 0; i < state.slotIcons.length; i++){
            let item = Math.floor(Math.random() * state.slotIcons.length)
            const icon = {
                ...state.slotIcons[item],
                id: `${Date.now()}-${i}-${Math.floor(Math.random() * 1000)}`
            }
            randomSpin.push(icon)
        }

        let res = calculatorWin(randomSpin, state.bet)
        console.log(res, randomSpin)
        return {
            ...state,
            spinResult: randomSpin,
            balance: balanceAfterBet += res[0],
            isActiveWin: res[1]
        }
    }
    return state
}

function changeBet(state, action){
    if (action.payload === "-"){
        state.bet > state.minBet ? state.bet -= 2 : state.bet = 2
    } else {
        state.bet < state.maxBet ? state.bet += 2 : state.bet = 100
    }
}

export const casinoReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(trySpinAction, trySpin)
        .addCase(changeBetAction, changeBet)
        .addCase(startAnimationAction, startAnimation)
        .addCase(endAnimationAction, endAnimation)
})