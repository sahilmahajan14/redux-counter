import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/CounterSlice.js";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Counter</h1>
            
            <button 
                onClick={() => dispatch(increment())}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4"
            >
                Increment
            </button>

            <div className="text-2xl font-semibold mb-4">{count}</div>

            <button
                onClick={() => dispatch(decrement())}
                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
                Decrement
            </button>
        </div>
    );
}

export default Counter;
