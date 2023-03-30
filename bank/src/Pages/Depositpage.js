import React from "react";
import Header from "../Components/Header/Header";
import CreateDeposit from "../Components/Inputs/CreateDeposit";

function DepositPage(){
    return(
        <div>
            <Header />
            <br/>
            <br/>
            <div>
                <CreateDeposit />
            </div>
        </div>
    )
}

export default DepositPage;