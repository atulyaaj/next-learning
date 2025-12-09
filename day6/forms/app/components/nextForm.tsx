"use client";
import { useRef, useState } from "react";

export default function NextForm() {

    const formElement = useRef(null);

    const labelStyle = {
        width: "100px",
        display: "inline-block",
        padding: "5px",
        margin: "5px",
        textAlign: "right"
    }

    const [userInfo, setUserInfo] = useState({
        uName: '',
        uEmail: '',
        uAge: '',
        uCity: ''
    });

    const [errors, setErrors] = useState({
        uNameError: '',
        uEmailError: '',
        uAgeError: '',
        uCityError: ''
    });

    /* 
    const nameChangeHandler = (evt)=>{
      setUserInfo({...userInfo, uName : evt.target.value})
    }
    const emailChangeHandler = (evt)=>{
      setUserInfo({...userInfo, ueMail : evt.target.value})
    }
    const ageChangeHandler = (evt)=>{
      setUserInfo({...userInfo, uAge : evt.target.value})
    }
    const cityChangeHandler = (evt)=>{
      setUserInfo({...userInfo, uCity : evt.target.value})
    } */

    const changeHandler = (e) => {
        if (e.target.id === "uAge") {
            setUserInfo({ ...userInfo, [e.target.id]: Number(e.target.value) })
        }
        else {
            setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
        }
    };


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(userInfo));
        const newErrors: any = {};

        if (!userInfo.uName) newErrors.uNameError = "User Name is required";
        if (!userInfo.uEmail) newErrors.uEmailError = "User Email is required";

        if (!userInfo.uAge) newErrors.uAgeError = "User Age is required";
        else if (Number(userInfo.uAge) < 18) {
            newErrors.uAgeError = "You are too young to join us";
        }
        else if (Number(userInfo.uAge) > 90) {
            newErrors.uAgeError = "You are too old to join us";
        }
        if (!userInfo.uCity) newErrors.uCityError = "User City is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        formElement.current.submit();
    }

    return <div style={{ margin: "auto", backgroundColor: "silver", fontFamily: "sans-serif", padding: "10px", width: "400px", border: "1px solid gray", borderRadius: "10px" }}>
        <h1 style={{ margin: "0px", textAlign: "center", color: "white" }}>Forms in NextJS</h1>
        <hr />
        <div>
            <form ref={formElement} action="#" method="get" onSubmit={submitHandler}>
                <div>
                    <label style={labelStyle} htmlFor="uName">Name: </label>
                    <input
                        name="uName"
                        id="uName"
                        value={userInfo.uName}
                        onChange={changeHandler}
                    />
                    {errors.uNameError && <span style={{ paddingLeft: "120px", color: "crimson", fontSize: "14px" }}>{errors.uNameError}</span>}
                </div>

                <div>
                    <label style={labelStyle} htmlFor="uEmail">Email: </label>
                    <input
                        name="uEmail"
                        type="email"
                        id="uEmail"
                        value={userInfo.uEmail}
                        onChange={changeHandler}
                    />
                    {errors.uEmailError && <span style={{ paddingLeft: "120px", color: "crimson", fontSize: "14px" }}>{errors.uEmailError}</span>}
                </div>

                <div>
                    <label style={labelStyle} htmlFor="uAge">Age: </label>
                    <input
                        name="uAge"
                        type="text"
                        id="uAge"
                        value={userInfo.uAge}
                        onChange={changeHandler}
                    />
                    {errors.uAgeError && <span style={{ paddingLeft: "120px", color: "crimson", fontSize: "14px" }}>{errors.uAgeError}</span>}
                </div>

                <div>
                    <label style={labelStyle} htmlFor="uCity">City: </label>
                    <input
                        name="uCity"
                        id="uCity"
                        value={userInfo.uCity}
                        onChange={changeHandler}
                    />
                    {errors.uCityError && <span style={{ paddingLeft: "120px", color: "crimson", fontSize: "14px" }}>{errors.uCityError}</span>}
                </div>

                <div>
                    <label style={labelStyle}></label>
                    <button type="submit" style={{ padding: "5px" }}>Submit</button>
                </div>

            </form>
        </div>
    </div>
}

/*
From State Management
Validation
----------------------
name
eMail
age
city
*/