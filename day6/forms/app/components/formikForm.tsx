"use client";
import { useFormik } from "formik";

export default function FormikForm() {

    const inputStyle = {
        width: "100px",
        display: "inline-block",
        padding: "5px",
        margin: "5px",
        textAlign: "right"
    };

    const errorStyle = {
        paddingLeft: "120px",
        color: "crimson",
        fontSize: "14px"
    }

    let formik = useFormik({
        initialValues: {
            uName: '',
            uEmail: '',
            uAge: '',
            uCity: '',
        },
        validate: values => {
            const errors = {};

            if (!values.uName) {
                errors.uName = "Required";
            } else if (values.uName.length > 20) {
                errors.uName = "Must be 20 characters or less";
            }
            
            if (!values.uEmail) {
                errors.uEmail = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.uEmail)) {
                errors.uEmail = 'Invalid email address';
            }

            if (!values.uAge) {
            errors.uAge = "Required";
            }     
            else if (Number(values.uAge) < 18) {
                errors.uAge = "You are too young to join us";
            }
            else if (Number(values.uAge) > 90) {
                errors.uAge = "You are too old to join us";
            }

            if (!values.uCity) errors.uCity = "Required";

            return errors;

        },
        onSubmit: (e) => { 
           
        }
    })

    return <div style={{ margin: "auto", backgroundColor: "silver", fontFamily: "sans-serif", padding: "10px", width: "400px", border: "1px solid gray", borderRadius: "10px" }}>
        <h1 style={{ margin: "0px ", textAlign: "center", color: "white" }}>Formik in NextJS</h1>
        <hr />
        <div>
            <form action="#" method="get" onSubmit={formik.handleSubmit}>
                <div>
                    <label style={inputStyle} htmlFor="uName">Name: </label>
                    <input
                        name="uName"
                        value={formik.values.uName}
                        onChange={formik.handleChange}
                        id="uName"
                    />
                    {formik.errors.uName && <span style={errorStyle}>{formik.errors.uName}</span>}
                </div>
                <div>
                    <label style={inputStyle} htmlFor="uEmail">Email: </label>
                    <input
                        name="uEmail"
                        value={formik.values.uEmail}
                        onChange={formik.handleChange}
                        id="uEmail"
                        type="email"
                    />
                    {formik.errors.uEmail && <span style={errorStyle}>{formik.errors.uEmail}</span>}
                </div>
                <div>
                    <label style={inputStyle} htmlFor="uAge">Age: </label>
                    <input
                        name="uAge"
                        value={formik.values.uAge}
                        onChange={formik.handleChange}
                        id="uAge"
                        type="text"
                    />
                    {formik.errors.uAge && <span style={errorStyle}>{formik.errors.uAge}</span>}
                </div>
                <div>
                    <label style={inputStyle} htmlFor="uCity">City: </label>
                    <input
                        name="uCity"
                        value={formik.values.uCity}
                        onChange={formik.handleChange}
                        id="uCity"
                    />
                    {formik.errors.uCity && <span style={errorStyle}>{formik.errors.uCity}</span>}
                </div>
                <div>
                    <label style={inputStyle}></label>
                    <button type="submit" style={{ padding: "5px" }} >Submit</button>
                </div>
            </form>
            {/* <p>{JSON.stringify(formik.values)}</p> */}
        </div>
    </div>
}