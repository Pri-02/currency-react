import React from "react";
function Inputbox(){
     return (
        <div className="">
            <div className="">
                <label htmlFor={amountInputId}  className="">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className=""
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="">
                <p className="">Currency Type</p>
                <select
                    className=""
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                > 
                </select>
            </div>
        </div>
    );
}
export default Inputbox