import React from 'react';
import Slot from "../conponents/Slot/Slot.jsx";
import SpinBtn from "../conponents/SpinBtn/SpinBtn.jsx";
import Bet from "../conponents/Bet/Bet.jsx";
import Balance from "../conponents/Balance/Balance.jsx";

const MainLayout = () => {
    return (
        <div>
            <header>header</header>
            <main>
                <div className="max-w-md mx-auto mt-10 bg-gray-900 text-white rounded-2xl shadow-xl p-6 space-y-6">
                    <Balance/>
                    <Slot/>
                    <Bet/>
                    <SpinBtn/>
                </div>
            </main>
            <footer>footer</footer>
        </div>
);
};

export default MainLayout;