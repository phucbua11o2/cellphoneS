import "./index.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Register() {
    return (
        <>
            <div className="cps-container-register cps-body-index">
                <div style={{ display: 'none' }} >
                    <div id="page_loader">
                        <div className="logo"></div>
                        <div className="loader"></div>
                    </div>
                </div>
                <div  className="cps-register-page">
                    <div  className="cps-register-mobile">
                        <div  className="top-nav-bar">
                            <div className="navbar-container is-flex is-align-items-center">
                                <div className="button__back">
                                    <div data-v-5170e23d="" className="icon-cps">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_3392_9050)"><path d="M25 12H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs><clipPath id="clip0_3392_9050"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                                    </div>
                                </div> <div className="nav-bar__title" style={{paddingRight: '24px'}}>Đăng ký Smember</div>
                            </div>
                        </div>
                        <div  id="login-form" className="cps-container-register">
                            <div  className="cps-login__image">
                                <img  src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png" alt="cps-logo" className="img" />
                            </div>
                            <div  className="cps-login-form">
                                <div className="form__group">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {
                                                mt: 1.5,width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="standard-basic" label="Nhập họ và tên" variant="standard" color="error" />
                                        <TextField id="standard-basic" label="Nhập số điện thoại" variant="standard" color="error" />
                                        <TextField id="standard-basic" label="Nhập email" variant="standard" color="error" />
                                        <p  className="item__description">(*) Hóa đơn VAT khi mua hàng sẽ được gửi qua email này</p>
                                        <TextField id="standard-basic" label="Nhập mật khẩu" variant="standard" color="error" />
                                        <p className="item__description">(*) Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1 chữ số, 1 ký tự đặc biệt</p>
                                        <TextField id="standard-basic" label="Nhập lại mật khẩu" variant="standard" color="error" />
                                        <TextField id="standard-basic" label="Nhập mã giới thiệu (nếu có)" variant="standard" color="error" />

                                    </Box>
                                    <div  className="group__option is-flex is-align-items-center">
                                        <input  id="insurance" type="checkbox" className="option__checkbox" />
                                        <label htmlFor="insurance" className="checkbox__text">Tôi đồng ý với các điều khoản bảo mật cá nhân</label>
                                    </div>
                                    <div  className="group__option is-flex is-align-items-center">
                                        <input  id="subscription" type="checkbox" className="option__checkbox" />
                                        <label htmlFor="subscription" className="checkbox__text">Đăng ký nhận bản tin khuyến mãi qua email</label>
                                    </div>
                                </div>
                                {/*<div  className="recaptcha is-flex is-justify-content-center">*/}
                                {/*    <div style={{ width: '304px', height: '78px' }} ><div>*/}
                                {/*        <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-fl5xje4a91k8" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LetVbYUAAAAABRM1I3VO6WD-xxhzTKiR9MDmbNK&amp;co=aHR0cHM6Ly9hY2NvdW50LmNlbGxwaG9uZXMuY29tLnZuOjQ0Mw..&amp;hl=en&amp;v=lLirU0na9roYU3wDDisGJEVT&amp;size=normal&amp;cb=tjcq0i4j8b6f"></iframe>*/}
                                {/*    </div>*/}
                                {/*        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}></textarea>*/}
                                {/*    </div>*/}
                                {/*    */}{/*<iframe style={{ display: 'none'}} />*/}
                                {/*</div>*/}
                                <button  className="btn-form__submit button__register">Đăng ký</button>
                                <div  className="line-through is-flex is-align-items-center">
                                    <hr  />
                                    <p >hoặc đăng ký bằng</p>
                                    <hr  />
                                </div>
                            </div>
                            <div  className="block-login-gg-fb is-flex">
                                <div className="login-gg-fb button__login-google">
                                    <img src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png" alt="google" className="login-gg-fb__icon" />
                                    <p className="login-gg-fb__text">Google</p>
                                </div>
                                <div className="login-gg-fb button__login-zalo">
                                    <img src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png" alt="google" className="login-gg-fb__icon" />
                                    <p className="login-gg-fb__text">Zalo</p>
                                </div>
                            </div>
                            <div  className="login-question is-flex is-justify-content-center">
                                <p  className="login-question__text">Bạn đã có tài khoản?</p>
                                <a  href="/" className="link button__go-login nuxt-link-active">Đăng nhập ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;