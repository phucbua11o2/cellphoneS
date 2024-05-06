import "./index.css";

function Cart() {
    return (
        <>
            <div id="indexSuperCart" className="super-cart-container">
                <div className="cart-header" >
                    <div className="go-back" >
                        <a href="/" className="d-flex align-items-center button__back" >
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M19 8.5L1 8.5M1 8.5L8 1M1 8.5L8 16" stroke="#121219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></path>
                            </svg>
                            <p >
                            </p>
                        </a>
                        <p className="title" >Giỏ hàng của bạn</p>
                        <div >
                        </div>
                    </div>
                    <div className="cps-custom-modal-login" >
                        <button id="cps-custom" type="button" className="btn item-about about-5 about-smember flex-column cps-btn-login-modal btn-secondary">
                            <div className="about__box-icon">
                                <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20">
                                    <title>Asset 1</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <circle cx="280" cy="280" r="265" className="cls-1"></circle>
                                            <circle cx="280" cy="210" r="115" className="cls-1"></circle>
                                            <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4" className="cls-1"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="about__box-content">
                                <p className="mb-0 title">Đăng nhập</p>
                            </div>
                        </button>
                    </div>
                    <div className="cps-custom-popover" style={{ display: "none" }} data-v-94251ec0="" >
                        <button id="popover-custom" type="button" className="btn cps-popover-btn btn-secondary" data-v-94251ec0="">
                            <a href="/">
                                <div className="box-icon" data-v-94251ec0="">
                                    <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20" data-v-94251ec0="">
                                        <title data-v-94251ec0="">Asset 1</title>
                                        <g id="Layer_2" data-name="Layer 2" data-v-94251ec0="">
                                            <g id="Layer_1-2" data-name="Layer 1" data-v-94251ec0="">
                                                <circle cx="280" cy="280" r="265" className="cls-1" data-v-94251ec0=""></circle>
                                                <circle cx="280" cy="210" r="115" className="cls-1" data-v-94251ec0=""></circle>
                                                <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4" className="cls-1" data-v-94251ec0=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="container tabs-cart-type mt-3"></div>
                <div className="container block-info mt-3">
                    <div className="nothing-in-cart">
                        <img src="https://cdn2.cellphones.com.vn/x,webp/media/cart/Cart-empty-v2.png" alt="Giỏ hàng rỗng"/>
                            <span className="my-3">
                    Giỏ hàng của bạn đang trống. <br/>
                        Hãy chọn thêm sản phẩm để mua sắm nhé
                        </span>
                    </div>
                </div>
                <div>
                    <div id="stickyBottomBar">
                        <a href="/" className="go-back">Quay lại trang chủ</a>
                    </div>
                    <div className="clear"></div>
                </div>
                <div>
                </div>
            </div>

            <button id="backToTop" title="Back to top" className="btn-back-to-top button__back-to-top" data-v-35e33e3b="">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-up svg-inline--fa fa-chevron-up">
                    <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" className=""></path>
                </svg>
                <strong>Lên đầu</strong>
            </button>
        </>
    )
}
export default Cart;