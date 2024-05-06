import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import "./index.css";

import { PatternFormat } from 'react-number-format';
import { useNavigate } from "react-router-dom";

function Main() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [topMainMiddle, setTopMainMiddle] = useState([]);
    const [topMainRight, settopMainRight] = useState([]);
    const [phone, setPhone] = useState([]);
    const [laptop, setLaptop] = useState([]);
    const [screen, setScreen] = useState([]);
    const [tablet, setTablet] = useState([]);
    const [sound, setSound] = useState([]);
    const [watch, setWatch] = useState([]);
    const [houseWares, setHouseWares] = useState([]);
    const [tivi, setTivi] = useState([]);

    useEffect(() => {

        axios.get("https://localhost:7105/Home/block-sliding-home").then((response) => {
            setTopMainMiddle((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/block-top-home__right-banner").then((response) => {
            settopMainRight((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/mobile").then((response) => {
            setPhone((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/laptop").then((response) => {
            setLaptop((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/man-hinh").then((response) => {
            setScreen((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/tablet").then((response) => {
            setTablet((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/thiet-bi-am-thanh").then((response) => {
            setSound((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/do-choi-cong-nghe").then((response) => {
            setWatch((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/do-gia-dung").then((response) => {
            setHouseWares((data) => {
                return response.data;
            });
        });
        axios.get("https://localhost:7105/Home/products/tivi").then((response) => {
            setTivi((data) => {
                return response.data;
            });
        });
    }, []);

    return (
        <>
        <div className="cps-container cps-body">
            <div style={{ display: "none" }}>
                <div id="page_loader">
                    <div className="logo"></div>
                    <div className="loader"></div>
                </div>
            </div>
            <div data-fetch-key="Index:0" className="cps-homepage">
                <h1 style={{ position: "fixed", top: "-100px" }} >CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng</h1>
            </div>
            <div>
                <div className="block-top-home is-flex">
                    <div id="menu-main" className="menu-container">
                        <div className="menu-wrapper space-bread-crumb">
                            <div className="menu-tree">
                                <div className="label-menu-tree">
                                    <div className="label-item multiple">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg)' }} ></i>
                                                <a href="/mobile" className="multiple-link" >
                                                <span>Điện thoại,&nbsp;</span>
                                            </a>
                                            <a href="/tablet" className="multiple-link">
                                                <span>Tablet</span>
                                            </a>
                                        </div>
                                        <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg></div>
                                    </div>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/laptop" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg)' }}>
                                            </i>
                                            <span className="single-link">Laptop</span>
                                        </div>
                                        <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/thiet-bi-am-thanh" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg)' }}></i>
                                            <span className="single-link">Âm thanh</span>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <div className="label-item multiple">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg)' }}></i>
                                            <a href="/do-choi-cong-nghe" className="multiple-link">
                                                <span>Đồng hồ,&nbsp;</span>
                                            </a>
                                            <a href="/camera" className="multiple-link">
                                                <span>Máy ảnh</span>
                                            </a>
                                        </div>
                                        <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="label-menu-tree">
                                    <div className="label-item multiple">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-845.svg)' }}></i>
                                            <a href="/do-gia-dung" className="multiple-link">
                                                <span>Gia dụng,&nbsp;</span>
                                            </a>
                                            <a href="/nha-thong-minh" className="multiple-link">
                                                <span>Smarthome</span>
                                            </a>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/phu-kien" target="_self" className="label-item">
                                        <div className="right-content"><i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-30.svg)' }} ></i>
                                            <span className="single-link">Phụ kiện</span>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <div className="label-item multiple">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon_cpu.svg)' }} ></i>
                                            <a href="/may-tinh-de-ban" className="multiple-link"><span>PC ,&nbsp;</span></a>
                                            <a href="/man-hinh" className="multiple-link"><span>Màn hình</span></a>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/tivi" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg)' }} ></i>
                                            <span className="single-link">Tivi</span>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/thu-cu-doi-moi" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-tcdm.svg)' }} ></i>
                                            <span className="single-link">Thu cũ đổi mới</span>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/hang-cu" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-29.svg)' }} ></i>
                                            <span className="single-link">Hàng cũ</span>
                                        </div>
                                        <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/danh-sach-khuyen-mai" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-promotion.svg)' }}></i>
                                            <span className="single-link">Khuyến mãi</span>
                                        </div>
                                        <div className="icon-right">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>

                                <div className="label-menu-tree">
                                    <a href="/tin-cong-nghe" target="_self" className="label-item">
                                        <div className="right-content">
                                            <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn.cellphones.com.vn/media/icons/menu/icon-cps-tech.svg)' }} ></i>
                                            <span className="single-link">Tin công nghệ</span>
                                        </div>
                                        <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="menu-tree-child columns m-0 box" style={{ display: 'none' }} ></div>
                        </div>
                    </div>
                    <div data-fetch-key="SlidingBanner:0" className="block-top-home__sliding-banner">

                        <div className="block-sliding-home">
                                <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                spaceBetween={10}
                                centeredSlides={true}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Navigation, Thumbs]}
                                thumbs={{ swiper: thumbsSwiper && !(thumbsSwiper as any).destroyed ? thumbsSwiper : null }}
                                className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal"
                            >
                                {topMainMiddle.map((mid:any) => {
                                    return (
                                        <SwiperSlide key={mid.id}>
                                            <a href={mid.url}>
                                                <img src={mid.image} alt={mid.title} />
                                            </a>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                                <Swiper
                                modules={[Navigation, Thumbs]}
                                watchSlidesProgress
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                slidesPerView={5}
                                freeMode={true}
                                className="swiper-container gallery-thumbs swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs"
                            >
                                {topMainMiddle.map((mid:any) => {
                                    return (
                                        <SwiperSlide key={mid.id}>
                                            <div style={{ width: "164px" }} >{mid.title}<br />{mid.name}</div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                        </div>

                    </div>
                    <div className="block-top-home__right-banner">
                        <div className="right-banner">
                            {topMainRight.map((right:any) => {
                                return (
                                    <a key={right.id} href={right.url} className="right-banner__item button__link">
                                        <img src={right.image} width="690" height="300" alt={right.title + " " + right.name} loading="lazy" className="right-banner__img" />
                                    </a>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="horizontal-banner">
                    <a href="/" className="horizontal-banner__item button__link">
                        <img src="https://cdn2.cellphones.com.vn/1200x75,webp,q100/https://dashboard.cellphones.com.vn/storage/b2s-special-desktop-dday-p1.png" width="1200" height="75" alt="B2S chào năm học mới" loading="lazy" className="horizontal-banner__img desktop" />
                        <img src="https://cdn2.cellphones.com.vn/800x150,webp,q100/https://dashboard.cellphones.com.vn/storage/b2s-special-mobile-dday-p1.png" width="800" height="150" alt="B2S chào năm học mới" loading="lazy" className="horizontal-banner__img mobile" />
                    </a>
                </div>
            </div>
            <div>
                <div className="block-featured-product min-height-home">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/mobile" className="title button__link"><h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2></a>
                        <a href="/mobile" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/mobile/apple" className="related-tag button__link">Apple</a>
                            <a href="/mobile/samsung" className="related-tag button__link">Samsung</a>
                            <a href="/mobile" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {phone.map((mobile:any) => {
                                    return (
                                        <SwiperSlide key={mobile.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={mobile.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={mobile.image} width="358" height="358" alt={mobile.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{mobile.name}</h3>
                                                        </div>

                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }}></span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={mobile.pricE_NEW} format="#.###.###" />₫
                                                                </p>
                                                                <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={mobile.pricE_OLD} format="#.###.###" />₫
                                                                </p>
                                                                <div className="product__price--percent"><p className="product__price--percent-detail">
                                                                    Giảm&nbsp;{mobile.discount} %
                                                                </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="block-trade-price">Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>
                                                                    :
                                                                </span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={mobile.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion"><p className="coupon-price">
                                                                    Tặng gói Samsung Care+ 1 năm và <b>2 km</b> khác</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }} >
                                                            <div className="promotion"><p className="gift-cont"></p></div>
                                                        </div>
                                                    </a>
                                                    <div className="product__sticker-doc-quyen" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png);" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" lazy="loading"' }} >
                                                    </div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/laptop" className="title button__link">
                            <h2>LAPTOP</h2>
                        </a>
                        <a href="/laptop" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/laptop/macbook" className="related-tag button__link">Macbook</a>
                            <a href="/laptop/thinkpad" className="related-tag button__link">Thinkpad</a>
                            <a href="/laptop/asus" className="related-tag button__link">Asus</a>
                            <a href="/laptop/hp" className="related-tag button__link">HP</a>
                            <a href="/laptop/surface" className="related-tag button__link">Surface</a>
                            <a href="/laptop/acer" className="related-tag button__link">Acer</a>
                            <a href="/laptop/msi" className="related-tag button__link">MSI</a>
                            <a href="/laptop/dell" className="related-tag button__link">Dell</a>
                            <a href="/laptop" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {laptop.map((laptop:any) => {
                                    return (
                                        <SwiperSlide key={laptop.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={laptop.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={laptop.image} width="358" height="358" alt={laptop.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{laptop.name} </h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }}>
                                                                :
                                                            </span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={laptop.pricE_NEW} format="#.###.###" />₫

                                                                </p>
                                                                <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={laptop.pricE_OLD} format="#.###.###" />₫

                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{laptop.discount} %
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>
                                                                    :
                                                                </span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={laptop.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion">
                                                                    <p className="coupon-price">Giảm thêm 1 triệu khi mua kèm màn hình Asus ProArt PA279CRV và <b>2 km</b> khác</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }} >
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>
                                            </div>

                                        </SwiperSlide>
                                    );
                                })}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/man-hinh" className="title button__link">
                            <h2>MÀN HÌNH, MÁY TÍNH ĐỂ BÀN</h2>
                        </a>
                        <a href="/man-hinh" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/may-tinh-de-ban" className="related-tag button__link">Máy tính bàn</a>
                            <a href="/may-tinh-de-ban/build-pc" className="related-tag button__link">Build PC</a>
                            <a href="/may-tinh-de-ban/pc-gaming" className="related-tag button__link">PC Gaming</a>
                            <a href="/may-tinh-de-ban/pc-dohoa" className="related-tag button__link">PC Đồ họa</a>
                            <a href="/may-tinh-de-ban/pc-dong-bo" className="related-tag button__link">PC đồng bộ</a>
                            <a href="/man-hinh/man-hinh-van-phong" className="related-tag button__link">Màn hình văn phòng</a>
                            <a href="/man-hinh/man-hinh-gaming" className="related-tag button__link">Màn hình Gaming</a>
                            <a href="/man-hinh" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {screen.map((screen:any) => {
                                    return (
                                        <SwiperSlide key={screen.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={screen.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={screen.image} width="358" height="358" alt={screen.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{screen.name}</h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={screen.pricE_NEW} format="#.###.###" />₫
                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={screen.pricE_OLD} format="#.###.###" />₫
                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{screen.discount}%
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={screen.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/tablet" className="title button__link">
                            <h2>MÁY TÍNH BẢNG</h2>
                        </a>
                        <a href="/tablet" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/tablet/ipad2022" className="related-tag button__link">iPad 10.9 inch 2022</a>
                            <a href="/tablet/ipadair" className="related-tag button__link">iPad Air</a>
                            <a href="/tablet/ipadpro" className="related-tag button__link">iPad Pro</a>
                            <a href="/tablet/lenovo" className="related-tag button__link">Lenovo</a>
                            <a href="/tablet/samsung" className="related-tag button__link">Samsung</a>
                            <a href="/tablet/xiaomi" className="related-tag button__link">Xiaomi</a>
                            <a href="/tablet" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {tablet.map((tablet:any) => {
                                    return (
                                        <SwiperSlide key={tablet.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={tablet.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={tablet.image} width="358" height="358" alt={tablet.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{tablet.name}</h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={tablet.pricE_NEW} format="#.###.###" />₫
                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={tablet.pricE_OLD} format="#.###.###" />₫
                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{tablet.discount}%
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={tablet.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion"><p className="coupon-price">Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 </p></div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div className="product__box-rating"><div>
                                                        <div className="icon-star is-active">
                                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                                        </div>
                                                        <div className="icon-star is-active">
                                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                                        </div>
                                                        <div className="icon-star is-active">
                                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                                        </div>
                                                        <div className="icon-star is-active">
                                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                                        </div>
                                                        <div className="icon-star">
                                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="btn-wish-list"><span>Yêu thích &nbsp;</span>
                                                    <div id="wishListBtn">
                                                        <button className="btn__effect button__add-wishlist inactive">
                                                            <svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg>
                                                            <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg>
                                                            <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path><path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" strokeMiterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg>
                                                            <span className="effect-group">
                                                                <span className="effect"></span>
                                                                <span className="effect"></span>
                                                                <span className="effect"></span>
                                                                <span className="effect"></span>
                                                                <span className="effect"></span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/thiet-bi-am-thanh" className="title button__link"><h2>ÂM THANH</h2></a>
                        <a href="/thiet-bi-am-thanh" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/thiet-bi-am-thanh/tai-nghe-bluetooth" className="related-tag button__link">Tai nghe Bluetooth</a>
                            <a href="/thiet-bi-am-thanh/tai-nghe-khong-day" className="related-tag button__link">Tai nghe không dây</a>
                            <a href="/thiet-bi-am-thanh/tai-nghe-gaming" className="related-tag button__link">Tai nghe Gaming</a>
                            <a href="/thiet-bi-am-thanh/tai-nghe-chup-tai" className="related-tag button__link">Tai nghe chụp tai</a>
                            <a href="/thiet-bi-am-thanh/loa-bluetooth" className="related-tag button__link">Loa Bluetooth</a>
                            <a href="/thiet-bi-am-thanh/loa-karaoke" className="related-tag button__link">Loa Karaoke</a>
                            <a href="/thiet-bi-am-thanh/loa-soundbar" className="related-tag button__link">Loa Soundbar</a>
                            <a href="/thiet-bi-am-thanh" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {sound.map((sound:any) => {
                                    return (
                                        <SwiperSlide key={sound.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={sound.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={sound.image} width="358" height="358" alt={sound.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{sound.name}</h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={sound.pricE_NEW} format="#.###.###" />₫
                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={sound.pricE_OLD} format="#.###.###" />₫
                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{sound.discount}%
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={sound.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion"><p className="coupon-price">Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 </p></div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap">
                        <a href="/do-choi-cong-nghe" className="title button__link"><h2>ĐỒNG HỒ THÔNG MINH</h2></a>
                        <a href="/do-choi-cong-nghe" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/do-choi-cong-nghe/applewatch" className="related-tag button__link">Apple Watch</a>
                            <a href="/do-choi-cong-nghe/samsung" className="related-tag button__link">Samsung</a>
                            <a href="/do-choi-cong-nghe/huawei" className="related-tag button__link">Huawei</a>
                            <a href="/do-choi-cong-nghe/garmin" className="related-tag button__link">Garmin</a>
                            <a href="/do-choi-cong-nghe/xiaomi" className="related-tag button__link">Xiaomi</a>
                            <a href="/do-choi-cong-nghe/amazfit" className="related-tag button__link">Amazfit</a>
                            <a href="/do-choi-cong-nghe/coros" className="related-tag button__link">Coros</a>
                            <a href="/do-choi-cong-nghe/kieslect" className="related-tag button__link">Kieslect</a>
                            <a href="/do-choi-cong-nghe" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {watch.map((watch:any) => {
                                    return (
                                        <SwiperSlide key={watch.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={watch.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={watch.image} width="358" height="358" alt={watch.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{watch.name}</h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={watch.pricE_NEW} format="#.###.###" />₫
                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={watch.pricE_OLD} format="#.###.###" />₫
                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{watch.discount}%
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={watch.pricE_UP} format="#.###.###" />₫
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion"><p className="coupon-price">Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 </p></div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap" >
                        <a href="/do-gia-dung" className="title button__link">
                            <h2>ĐỒ GIA DỤNG</h2>
                        </a>
                        <a href="/do-gia-dung" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/do-gia-dung/noi-chien-khong-dau" className="related-tag button__link">Nồi chiên không dầu</a>
                            <a href="/do-gia-dung/noi-com-dien" className="related-tag button__link">Nồi cơm điện</a>
                            <a href="/do-gia-dung/robot-hut-bui" className="related-tag button__link">Robot hút bụi</a>
                            <a href="/do-gia-dung/may-hut-bui" className="related-tag button__link">Máy hút bụi cầm tay</a>
                            <a href="/do-gia-dung/may-loc-khong-khi" className="related-tag button__link">Máy lọc không khí</a>
                            <a href="/do-gia-dung/lo-vi-song" className="related-tag button__link">Lò vi sóng</a>
                            <a href="/do-gia-dung/ban-ghe-cong-thai-hoc" className="related-tag button__link">Bàn ghế công thái học</a>
                            <a href="/do-gia-dung" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {houseWares.map((houseWare:any) => {
                                    return (
                                        <SwiperSlide key={houseWare.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={houseWare.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={houseWare.image} width="358" height="358" alt={houseWare.image} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{houseWare.name} </h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={houseWare.pricE_NEW} format="#.###.###" />₫

                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={houseWare.pricE_OLD} format="#.###.###" />₫

                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{houseWare.discount} %
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={houseWare.pricE_UP} format="#.###.###" />₫

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion"><p className="coupon-price">Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 </p></div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>

                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="block-featured-product">
                    <div className="product-list-title is-flex is-flex-wrap-wrap" >
                        <a href="/tivi" className="title button__link">
                            <h2>TIVI</h2>
                        </a>
                        <a href="/tivi" className="more-product button__link">Xem tất cả</a>
                        <div className="list-related-tag">
                            <a href="/tivi/samsung" className="related-tag button__link">Samsung</a>
                            <a href="/tivi/xiaomi" className="related-tag button__link">Xiaomi</a>
                            <a href="/tivi/toshiba" className="related-tag button__link">Toshiba</a>
                            <a href="/tivi/lg" className="related-tag button__link">LG</a>
                            <a href="/tivi/sony" className="related-tag button__link">Sony</a>
                            <a href="/tivi/casper" className="related-tag button__link">Casper</a>
                            <a href="/tivi/coocaa" className="related-tag button__link">Coocaa</a>
                            <a href="/tivi" className="related-tag button__link">Xem tất cả</a>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="product-list-swiper">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper3 p-2 swiper-container"
                            >
                                {tivi.map((tivi:any) => {
                                    return (
                                        <SwiperSlide key={tivi.id}>
                                            <div className="product-info-container">
                                                <div className="product-info">
                                                    <a href={tivi.url} className="product__link button__link">
                                                        <div className="product__image">
                                                            <img src={tivi.image} width="358" height="358" alt={tivi.name} loading="lazy" className="product__img" />
                                                        </div>
                                                        <div className="product__name">
                                                            <h3>{tivi.name}</h3>
                                                        </div>
                                                        <div className="block-box-price">
                                                            <span className="title-price" style={{ display: "none" }} >:</span>
                                                            <div className="box-info__box-price">
                                                                <p className="product__price--show">
                                                                    <PatternFormat displayType="text" value={tivi.pricE_NEW} format="#.###.###" />₫

                                                                </p> <p className="product__price--through">
                                                                    <PatternFormat displayType="text" value={tivi.pricE_OLD} format="#.###.###" />₫

                                                                </p>
                                                                <div className="product__price--percent">
                                                                    <p className="product__price--percent-detail">
                                                                        Giảm&nbsp;{tivi.discount}%
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-trade-price">
                                                            Giá lên đời:&nbsp;
                                                            <div className="block-box-price">
                                                                <span className="title-price" style={{ display: "none" }}>:</span>
                                                                <div className="box-info__box-price">
                                                                    <p className="product__price--show">
                                                                        <PatternFormat displayType="text" value={tivi.pricE_UP} format="#.###.###" />₫

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions">
                                                            <div>
                                                                <div className="promotion">
                                                                    <div className="promo-list">
                                                                        <ul>
                                                                            <li className="pmh-title">PMH</li>
                                                                            <li className="pmh-content">5,370,000&nbsp;₫</li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="coupon-price">Tặng khung tranh TV Samsung VG-SCFA50TKBRU </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product__promotions" style={{ display: "none" }}>
                                                            <div className="promotion">
                                                                <p className="gift-cont"></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                    <div className="product__sticker-doc-quyen" data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg" style={{ display: "none", backgroundImage: 'url(https://cdn2.cellphones.com.vn/200x/media/wysiwyg/placehoder.png)' }}></div>
                                                </div>
                                                <div className="bottom-div"><div className="product__box-rating"><div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div className="icon-star is-active"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div></div></div> <div className="btn-wish-list"><span>Yêu thích &nbsp;</span> <div id="wishListBtn"><button className="btn__effect button__add-wishlist inactive"><svg viewBox="20 18 29 28" aria-hidden="true" focusable="false" className="heart-border icon-svg icon-svg--color-cps"><path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-stroke icon-svg icon-svg--color-silver"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false" className="heart-full icon-svg icon-svg--color-cps"><path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" className="broken-heart"><g fill="#D70018"><path d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z" className="broken-heart--left"></path> <path d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z" className="broken-heart--right"></path></g> <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573" className="broken-heart--crack"></path></svg> <span className="effect-group"><span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span> <span className="effect"></span></span></button></div></div></div>

                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="block-categories is-desktop">
                    <div className="categories-title">
                        <h2>
                            <a href="/phu-kien" className="button__link">PHỤ KIỆN</a>
                        </h2>
                        <a href="/phu-kien" className="btn-show-more button__link">Xem tất cả</a>
                    </div>
                    <div className="categories-content">
                        <div className="categories-content-wrapper is-flex">
                            <div className="item-categories-outer">
                                <a href="/phu-kien" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-1644.svg)' }} ><span>Nổi bật</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/apple" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-43.svg)' }} ><span>Phụ kiện Apple</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/dan-man-hinh" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-286.svg)' }} ><span>Dán màn hình</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/op-lung" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-108.svg)' }} ><span>Ốp lưng - Bao da</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/cap-sac-du-phong" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-114.svg)' }} ><span>Cáp, sạc</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/pin-du-phong" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-122.svg)' }} ><span>Pin dự phòng</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/thiet-bi-mang" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-676.svg)' }} ><span>Thiết bị mạng</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/gaming-gear" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-669.svg)' }} ><span>Gaming Gear</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/gimbal" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-852.svg)' }} ><span>Gimbal | Tay cầm chống rung</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/usb" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-109.svg)' }} ><span>Thẻ nhớ, USB</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/chuot-ban-phim" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-663.svg)' }} ><span>Chuột, bàn phím</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/sim" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/i/sim_1_1.png)' }} ><span>Sim 4G</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/sim-so-dep" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/i/sim_5.png)' }} ><span>Sim số đẹp</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/camera-hanh-trinh" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_htrinh.png)' }} ><span>Camera hành trình</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/camera-an-ninh" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_anninh.png)' }} ><span>Camera an ninh</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/laptop" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-44.svg)' }} ><span>Phụ kiện Laptop</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/balo" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-70.svg)' }} ><span>Balo, túi chống sốc</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/quat-mini" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/c/a/cate-109-quat.png)' }} ><span>Quạt mini</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/o-cung" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-750.svg)' }} ><span>Ổ cứng đi động</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/phu-kien/apple-care" className="button__link item-categories " style={{ backgroundColor: 'rgb(242, 131, 118)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-966.svg)' }} ><span>Apple Care</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-categories is-desktop">
                    <div className="categories-title">
                        <h2>
                            <a href="/linh-kien" className="button__link">LINH KIỆN MÁY TÍNH</a>
                        </h2>
                        <a href="/linh-kien" className="btn-show-more button__link">Xem tất cả</a>
                    </div>
                    <div className="categories-content">
                        <div className="categories-content-wrapper is-flex">
                            <div className="item-categories-outer">
                                <a href="/may-tinh-de-ban/lap-rap" className="button__link item-categories " style={{ backgroundColor: 'rgb(252, 165, 165)', backgroundImage: 'url(https://cellphones.com.vn/media/icons/category/cate-868.svg)' }} ><span>PC ráp sẵn CellphoneS</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/cpu" className="button__link item-categories " style={{ backgroundColor: 'rgb(253, 164, 175)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/p/cpu_1.png)' }} ><span>CPU</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/main-board" className="button__link item-categories " style={{ backgroundColor: 'rgb(249, 168, 212)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/m/a/mainboard_1.png)' }} ><span>Mainboard</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/ram" className="button__link item-categories " style={{ backgroundColor: 'rgb(196, 181, 253)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/r/a/ram_2.png)' }} ><span>RAM</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/ocung" className="button__link item-categories " style={{ backgroundColor: 'rgb(165, 180, 252)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/s/ssd_2.png)' }} ><span>Ổ cứng</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/vga" className="button__link item-categories " style={{ backgroundColor: 'rgb(147, 197, 253)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/v/g/vga.png)' }} ><span>Card màn hình</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/psu" className="button__link item-categories " style={{ backgroundColor: 'rgb(110, 231, 183)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/p/s/psu.png)' }} ><span>Nguồn máy tính</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/tan-nhiet" className="button__link item-categories " style={{ backgroundColor: 'rgb(252, 211, 75)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/t/_/t_n_nhi_t_2.png)' }} ><span>Tản nhiệt</span>
                                </a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/linh-kien/case" className="button__link item-categories " style={{ backgroundColor: 'rgb(253, 186, 116)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/case_1.png)' }} ><span>Case máy tính</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-categories is-desktop">
                    <div className="categories-title">
                        <h2>
                            <a href="/hang-cu" className="button__link">HÀNG CŨ</a>
                        </h2>
                        <a href="/hang-cu" className="btn-show-more button__link">Xem tất cả</a>
                    </div>
                    <div className="categories-content">
                        <div className="categories-content-wrapper is-flex">
                            <div className="item-categories-outer">
                                <a href="/hang-cu/mobile" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ip-14-hp-cu.png)' }}><span>Điện thoại cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/tablet" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ipad-cate-cu.png)' }} ><span>Máy tính bảng cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/macbook" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-392.svg)' }} ><span>Mac cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/laptop" className="button__link item-categories " style={{ backgroundColor: 'rgb(213, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-878.svg)' }} ><span>Laptop cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/tai-nghe" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-tai-nghe_1.png)' }} ><span>Tai nghe cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/loa" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-loa_1.png)' }} ><span>Loa cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/do-choi-cong-nghe" className="button__link item-categories " style={{ backgroundColor: 'rgb(213, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-451.svg)' }} ><span>Đồng hồ thông minh cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/nha-thong-minh" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/category/cate-846.svg)' }} ><span>Nhà thông minh cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/phu-kien" className="button__link item-categories " style={{ backgroundColor: 'rgb(213, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-phu-kien.png)' }} ><span>Phụ kiện cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/man-hinh" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-man-hinh.png)' }} ><span>Màn hình cũ</span></a>
                            </div>
                            <div className="item-categories-outer">
                                <a href="/hang-cu/tivi" className="button__link item-categories " style={{ backgroundColor: 'rgb(214, 64, 68)', backgroundImage: 'url(https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/t/i/tivi-cu-new_1334.png)' }}><span>Tivi cũ</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-banner">
                    <div className="title">
                        <a href="/danh-sach-uu-dai" className="button__link">Ưu đãi thanh toán</a>
                    </div>
                    <div className="brand-banner__content">
                        <a href="/danh-sach-uu-dai/ocb" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/ocb-sliding-uudaithanhtoan.png" width="690" height="300" alt="ƯU ĐÃI ĐỐI TÁC OCB 2023" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/danh-sach-uu-dai/vpbank" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Sliding-vpbank-bew0995.png" width="690" height="300" alt="Mở thẻ VP Bank nhận ưu đãi 1.5 triệu" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/danh-sach-uu-dai/vib" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sli-vib.png" width="690" height="300" alt="Ưu đãi VIB - Nhận E-voucher 200K" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/danh-sach-uu-dai/shopeepay" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-uu-dai-shopeepay.png" width="690" height="300" alt="ƯU ĐÃI THANH TOÁN QUA SHOPEEPAY - GIẢM ĐẾN 100K" loading="lazy" className="brand-banner__img" /></a>
                    </div>
                </div>
                <div className="brand-banner">
                    <div className="title">
                        <a href="/" className="button__link">Chuyên trang thương hiệu</a>
                    </div>
                    <div className="brand-banner__content">
                        <a href="/apple" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sliding-apple-112.png" width="690" height="300" alt="Sis Apple" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/samsung" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/th-hieu-ss-0013.png" width="690" height="300" alt="Samsung" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/asus" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/SIS asus.png" width="690" height="300" alt="Asus" loading="lazy" className="brand-banner__img" /></a>
                        <a href="/xiaomi" className="brand-banner__item button__link">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/xiaomi.png" width="690" height="300" alt="Xiaomi" loading="lazy" className="brand-banner__img" /></a>
                    </div>
                </div>
                <div id="sforum-homepage" className="mt-1 pb-3">
                    <a href="/" className="title-anchor button__link-sforum-homepage is-flex is-align-items-center is-justify-content-space-between">
                        <p>TIN CÔNG NGHỆ</p>
                        <p>Xem tất cả</p>
                    </a>
                    <div className="sforum-homepage-container is-flex is-justify-content-space-between">
                        <a href="/" className="sforum-item pb-2 button__link-sforum">
                            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/Xiaomi-MIX-Fold-3-cover.jpeg" alt="Điểm danh loạt smartphone sẽ ra mắt trong tháng 8/2023: Galaxy F34, Redmi 12 5G, Xiaomi MIX Fold 3,..." className="p-1" />
                            <p className="sforum-item-title px-2">Điểm danh loạt smartphone sẽ ra mắt trong tháng 8/2023: Galaxy F34, Redmi 12 5G, Xiaomi MIX Fold 3,...</p>
                        </a>
                        <a href="/" className="sforum-item pb-2 button__link-sforum">
                            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/Xiaomi-13T-cover.jpeg" alt="Xiaomi 13T đạt một loạt chứng nhận quan trọng trước khi ra mắt" className="p-1" />
                            <p className="sforum-item-title px-2">Xiaomi 13T đạt một loạt chứng nhận quan trọng trước khi ra mắt</p>
                        </a>
                        <a href="/" className="sforum-item pb-2 button__link-sforum">
                            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/Galaxy-S24.jpeg" alt="Galaxy S24, S24+ sẽ có viền bezel mỏng hơn và màn hình LTPO" className="p-1" />
                            <p className="sforum-item-title px-2">Galaxy S24, S24+ sẽ có viền bezel mỏng hơn và màn hình LTPO</p>
                        </a>
                        <a href="/" className="sforum-item pb-2 button__link-sforum">
                            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/Redmi-12-5G-ra-mat-1.jpeg" alt="Redmi 12 5G ra mắt: Chip SD4 Gen 2, màn hình 90Hz, pin 5000 mAh, giá chỉ từ 3.16 triệu đồng" className="p-1" />
                            <p className="sforum-item-title px-2">Redmi 12 5G ra mắt: Chip SD4 Gen 2, màn hình 90Hz, pin 5000 mAh, giá chỉ từ 3.16 triệu đồng</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
         </>
    );
}

export default Main;