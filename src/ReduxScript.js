// // GameDataContext.js
// import React, { createContext, useContext, useReducer } from 'react';
//
//
// const initialGameData = {
//     current_page: 0,
//     current_vocab: 0,
//
// };
//
//
//
// // Action types
// const SET_Page = 'SET_WAREHOUSE';
// const SET_SHIP = 'SET_SHIP';
// const SET_BANK = 'SET_BANK';
//
// const SET_ENCOUNTERS = "SET_ENCOUNTERS"
// // Reducer function
// const gameDataReducer = (state, action) => {
//     switch (action.type) {
//         case SET_ENCOUNTERS:
//             return { ...state, encounters: action.payload };
//         case SET_WAREHOUSE:
//             return { ...state, warehouse: action.payload };
//         case SET_SHIP:
//             return { ...state, ship: action.payload };
//         case SET_PRICES:
//             return { ...state, prices: set_prices() };
//         case RESET_PRICES:
//             return { ...state, prices: reset_prices() };
//         case SET_BANK:
//             return { ...state, bank: action.payload };
//         case SET_DEBT:
//             return { ...state, debt: action.payload };
//         case SET_WALLET:
//             return { ...state, wallet: action.payload };
//         case SET_SHIP_HEALTH:
//             return { ...state, ship_health: action.payload };
//         case SET_SHIP_TOTAL:
//             return { ...state, ship_total: action.payload };
//         case SET_SHIP_MAX:
//             return { ...state, ship_health_max: action.payload };
//         case SET_DATE:
//             var days = turnEnd()
//             var curr_date = new Date(state.date)
//             curr_date.setDate(curr_date.getDate()+days)
//             return { ...state, date: curr_date};
//         case SET_CURR_LOC:
//             return { ...state, curr_loc: action.payload };
//         case SET_PIRATES:
//             return { ...state, pirates: action.payload };
//         case SET_PIRATE_COUNTER:
//             var rand = update_pirates()
//             return {...state, pirate_counter: state.pirate_counter + rand}
//         case SET_NEXT_LOC:
//             return { ...state, next_loc: action.payload };
//         case REMOVE_PIRATES:
//             var diff = remove_pirates(state.pirate_counter)
//             return {...state, pirate_counter: state.pirate_counter - diff}
//         case SET_MENU:
//             return { ...state, curr_menu: action.payload };
//         case RESET_MENU:
//             return { ...state, curr_menu: 0 };
//         case SET_MESSAGE:
//             return { ...state, report_message: action.payload };
//         default:
//             return state;
//     }
// };
//
// // Context
// const DataContext = createContext();
//
// // Custom hook to access the context
// const useGameData = () => {
//     const context = useContext(DataContext);
//     if (!context) {
//         throw new Error('useGameData must be used within a GameDataProvider');
//     }
//     return context;
// };
//
// // Provider component
// const GameDataProvider = ({ children }) => {
//     const [data, dispatch] = useReducer(gameDataReducer, initialGameData);
//
//     const setWarehouse = (warehouse) => dispatch({ type: SET_WAREHOUSE, payload: warehouse });
//     const setShip = (ship) => dispatch({ type: SET_SHIP, payload: ship });
//     const setBank = (bank) => dispatch({ type: SET_BANK, payload: bank });
//     const setDebt = (debt) => dispatch({ type: SET_DEBT, payload: debt });
//     const setWallet = (wallet) => dispatch({ type: SET_WALLET, payload: wallet });
//     const setShipHealth = (shipHealth) => dispatch({ type: SET_SHIP_HEALTH, payload: shipHealth });
//     const setDate = (date) => dispatch({ type: SET_DATE, payload: date });
//     const setCurr = (curr_loc) => dispatch({type: SET_CURR_LOC, payload:curr_loc})
//     const setNext = (next_loc) => dispatch({type: SET_NEXT_LOC, payload:next_loc})
//     const setShipTotal = (ship_total) => dispatch({type: SET_SHIP_TOTAL, payload:ship_total})
//     const setPrices = (prices) => dispatch({type:SET_PRICES, payload:prices})
//     const resetPrices = (prices) => dispatch({type:RESET_PRICES, payload:prices})
//     const setPirates = (pirates) => dispatch({type:SET_PIRATES, payload:pirates})
//     const remPirateCounter = (pirate_counter) => dispatch({type:REMOVE_PIRATES, payload:pirate_counter})
//     const setPirateCounter = (pirate_counter) => dispatch({type:SET_PIRATE_COUNTER, payload:pirate_counter})
//     const setShipMax = (ship_health_max) => dispatch({type:SET_SHIP_MAX, payload:ship_health_max})
//     const setMenu = (curr_menu) => dispatch({type:SET_MENU, payload:curr_menu})
//     const resetMenu = (curr_menu) => dispatch({type:RESET_MENU, payload:curr_menu})
//     const setMessage = (report_message) => dispatch({type:SET_MESSAGE, payload:report_message})
//     const setEncounters = (encounters) => dispatch({ type: SET_ENCOUNTERS, payload: encounters });
//     const value = {
//         gameData,
//         setWarehouse,
//         setShip,
//         setBank,
//         setDebt,
//         setWallet,
//         setShipHealth,
//         setDate,
//         setCurr,
//         setNext,
//         setPrices,
//         resetPrices,
//         setPirates,
//         setPirateCounter,
//         remPirateCounter,
//         setShipMax,
//         setMenu,
//         resetMenu,
//         setShipTotal,
//         setMessage,
//         setEncounters
//     };
//
//     return <GameDataContext.Provider value={value}>{children}</GameDataContext.Provider>;
// };
//
// export { GameDataProvider, useGameData };
