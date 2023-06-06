import React from 'react'

export default function LoginRegister() {
    return (
        <div className="log-reg-content">
            <div className="container">
                <div className="row">

                    {/* Login Section Start */}
                    <div className="col-md-6">
                        <form action="#" className="login-form">
                            <h3>LOGIN</h3>
                            <label for="your_id">USERNAME OR EMAIL ADDRESS*</label>
                            <input className="input-form" type="text" id="your_id" />
                            <label for="your_password">YOUR PASSWORD*</label>
                            <input className="input-form" type="password" id="your_password" />
                            <button className="submit-btn" type="submit">LOGIN</button>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> REMEMBER ME?
                                </label>
                            </div>
                            <a href="#">LOST YOUR PASSWORD?</a>
                        </form>
                    </div>
                    {/* Login Section End */}

                    {/* Registration Section Start */}
                    <div className="col-md-6">
                        <form action="#" className="register-form">
                            <h3>REGISTER</h3>
                            <h5>IF YOU DON’T HAVE AN ACCOUNT, REGISTER NOW!</h5>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> I ACCEPT THE TERMS AND CONDITIONS, INCLUDING THE PRIVACY POLICY
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> I WANT ZORKA TO SEND ME NEWS AND UPDATES BY EMAIL
                                </label>
                            </div>
                            <button className="submit-btn" type="submit">REGISTER</button>
                        </form>
                    </div>
                    {/* Registration Section End */}

                </div>
            </div>
        </div>
    )
}
