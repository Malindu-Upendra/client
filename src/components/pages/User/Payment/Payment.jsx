import React, {useEffect, useState} from "react";
import './css/paypal.css';
import PayPal from "./PayPal/Paypal.jsx";

export default function Pay(props){

    const [details , setDetails] = useState(props);

        return (
            <div className="pay">
                 <PayPal
                     email={details.email}
                     name={details.name}
                     phoneNumber={details.phoneNumber}
                     amount={details.amount}/>
            </div>
        );

}
