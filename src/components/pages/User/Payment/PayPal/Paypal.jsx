import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import '../css/paypal.css';

export default function Paypal(props) {
    const paypal = useRef();
    const [user,setUser] = useState(props);

    useEffect(() => {

        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "USD",
                                    value: 2,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    await axios.post('http://localhost:5000/user/attendee',user).then(res => {
                        if(res.data.success) {
                            props.onSuccess();
                            // window.location = '/';
                            // alert("Successfully Registered");

                        }
                    })
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    });

    return (
        <div>
            <div className="pay" ref={paypal}></div>
        </div>
    );
}
