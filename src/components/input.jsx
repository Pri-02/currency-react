import React from "react";
function Inputbox({
label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],
selectCurrency="usd",amountDisable=false,currencyDisable=false


}){
     return (
        <div className="big-box">
            <div className="lebel-box">
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
            <div className="type-box">
                <p className="currency-box">Currency Type</p>
                <select
                    className="select-box"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                > 
                {currencyOptions.map((c)=>(
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );
}
export default Inputbox;