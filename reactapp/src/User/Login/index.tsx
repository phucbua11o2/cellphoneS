import * as React from 'react';
import "./index.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
    return (
        <>
            <div className="cps-container-register cps-body-index">
                <div style={{ display: 'none' }} >
                    <div id="page_loader">
                        <div className="logo"></div>
                        <div className="loader"></div>
                    </div>
                </div>
                <div className="cps-register-page">
                    <div className="cps-register-mobile">
                        <div className="top-nav-bar">
                            <div className="navbar-container is-flex is-align-items-center">
                                <div className="nav-bar__title" style={{ paddingRight: '24px' }}>Đăng nhập Smember</div>
                            </div>
                        </div>
                        <div id="login-form" className="cps-container-register">
                            <div className="cps-login__image">
                                <img src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png" alt="cps-logo" className="img" />
                            </div>
                            <div className="cps-login-form">
                                <div className="form__group">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {
                                                mt: 1.5, width: '100%'
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Nhập số điện thoại/email" variant="standard" color="error" />
                                        <TextField id="standard-basic" label="Nhập mật khẩu" variant="standard" color="error" />
                                    </Box>
                                </div>
                                {/*<div  className="recaptcha is-flex is-justify-content-center">*/}
                                {/*    <div style={{ width: '304px', height: '78px' }} ><div>*/}
                                {/*        <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-fl5xje4a91k8" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LetVbYUAAAAABRM1I3VO6WD-xxhzTKiR9MDmbNK&amp;co=aHR0cHM6Ly9hY2NvdW50LmNlbGxwaG9uZXMuY29tLnZuOjQ0Mw..&amp;hl=en&amp;v=lLirU0na9roYU3wDDisGJEVT&amp;size=normal&amp;cb=tjcq0i4j8b6f"></iframe>*/}
                                {/*    </div>*/}
                                {/*        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}></textarea>*/}
                                {/*    </div>*/}
                                {/*    */}{/*<iframe style={{ display: 'none'}} />*/}
                                {/*</div>*/}
                                <button className="btn-form__submit button__register">Đăng ký</button>
                                <div className="line-through is-flex is-align-items-center">
                                    <hr />
                                    <p >hoặc đăng ký bằng</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="block-login-gg-fb is-flex">
                                <div className="login-gg-fb button__login-google">
                                    <img src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png" alt="google" className="login-gg-fb__icon" />
                                    <p className="login-gg-fb__text">Google</p>
                                </div>
                                <div className="login-gg-fb button__login-zalo">
                                    <img src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png" alt="google" className="login-gg-fb__icon" />
                                    <p className="login-gg-fb__text">Zalo</p>
                                </div>
                            </div>
                            <div className="login-question is-flex is-justify-content-center">
                                <p className="login-question__text">Bạn đã có tài khoản?</p>
                                <a href="/" className="link button__go-login nuxt-link-active">Đăng nhập ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;