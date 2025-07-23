import {createAction} from "@reduxjs/toolkit";

export const trySpinAction = createAction("casino/trySpin")
export const changeBetAction = createAction("casino/changeBet")
export const startAnimationAction = createAction('casino/startAnimation')
export const endAnimationAction = createAction('casino/endAnimation')