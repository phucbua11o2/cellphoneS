import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

import './Header.css';
function Header(props:any) {
    const [isShown, setIsShown] = useState(false);
    const [isShowLogin, setIsShowLogin] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setIsShowLogin(!isShowLogin); // Toggle the value of showComponent on each click
    };
    const handleRegiter = () => {
        setIsShowLogin(!isShowLogin); // Toggle the value of showComponent on each click
        return navigate("/Register");
    }
    const handleLogin = () => {
        setIsShowLogin(!isShowLogin); // Toggle the value of showComponent on each click
        return navigate("/Login");
    }
    return (
        <div id="cpsHeaderOutLine" data-fetch-key="Header:0">
            <header id="cpsHeader" className="cps-header sticky">
                <div id="bannerTopHead">
                    <div className="cps-container">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <a href="/">
                                    <img src="https://cdn2.cellphones.com.vn/x30,webp,q100/https://dashboard.cellphones.com.vn/storage/top-banner-chinh-sach-bao-hanh-doi-tra.png" alt="Top Banner Mobile dịch vụ bảo hành" loading="lazy" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/">
                                    <img src="https://cdn2.cellphones.com.vn/x30,webp,q100/https://dashboard.cellphones.com.vn/storage/top-banner-chinh-hang-xuat-vat-day-du.png" alt="TOP banner mobile sản phẩm chính hãng đầy đủ VAT" loading="lazy" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="/">
                                    <img src="https://cdn2.cellphones.com.vn/x30,webp,q100/https://dashboard.cellphones.com.vn/storage/top-banner-giao-nhanh-mien-phi.png" alt="TOP banner mobile giao nhanh miễn phí" loading="lazy" />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="cps-container nav-container">
                    <nav className="cps-navbar">
                        <a href="/" className="navbar-brand button__home">
                            <div className="box-logo cps-navbar__logo logo__desktop navbar-item">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 269.231 50"><defs><pattern id="patternLogo" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 530 95"><image width="530" height="95" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="></image></pattern></defs> <rect id="header__logo--bg" width="269.231" height="50" fill="url(#patternLogo)"></rect></svg>
                            </div>
                            <div className="box-logo cps-navbar__logo logo__mobile navbar-item">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120"><title>Logo CellphoneS</title> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><image width="120" height="120" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTFGN0JGRkVDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFGN0JGRkZDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MUY3QkZGQ0MwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MUY3QkZGREMwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgpTqXEAAAhlSURBVHja7JwLbBTH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"></image></g></g></svg>
                            </div>
                        </a>
                        <div className="header-item btn-menu button__menu" onClick={() => setIsShown(!isShown)} >
                            <div className="about__box-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.99 26.99">
                                <defs></defs>
                                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="7.06" y1="7.52" x2="19.92" y2="7.52" className="cls-1"></line> <line x1="7.06" y1="13.49" x2="19.92" y2="13.49" className="cls-1"></line> <line x1="7.06" y1="19.47" x2="11.95" y2="19.47" className="cls-1"></line> <rect x="0.9" y="0.9" width="25.19" height="25.19" rx="4.71" className="cls-1"></rect></g></g></svg></div>
                            <div className="about__box-content"><p>Danh mục</p></div>
                        </div>
                        <div id="menu-main" className={isShown ? 'menu-container' : 'menu-container menu-container-not-display'} >
                            <div className="menu-wrapper space-bread-crumb" style={{ top: "70px" }} >
                                <div className="menu-tree">
                                    <div className="label-menu-tree">
                                        <div className="label-item multiple">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg)' }} ></i>
                                                <a href="https://cellphones.com.vn/mobile.html?itm=menu" className="multiple-link"><span>Điện thoại,&nbsp;</span></a>
                                                <a href="https://cellphones.com.vn/tablet.html?itm=menu" className="multiple-link"><span>Tablet</span></a>
                                            </div>
                                            <div className="icon-right"><svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/laptop.html?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg)' }} ></i>
                                                <span className="single-link">Laptop</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/thiet-bi-am-thanh.html?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg)' }} ></i>
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
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg)' }} ></i>
                                                <a href="https://cellphones.com.vn/do-choi-cong-nghe.html?itm=menu" className="multiple-link">
                                                    <span>Đồng hồ,&nbsp;</span>
                                                </a>
                                                <a href="https://cellphones.com.vn/phu-kien/camera.html?itm=menu" className="multiple-link">
                                                    <span>Camera</span>
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
                                        <div className="label-item multiple">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-845.svg)' }} ></i>
                                                <a href="https://cellphones.com.vn/do-gia-dung.html?itm=menu" className="multiple-link">
                                                    <span>Gia dụng,&nbsp;</span>
                                                </a>
                                                <a href="https://cellphones.com.vn/nha-thong-minh.html?itm=menu" className="multiple-link">
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
                                        <a href="https://cellphones.com.vn/phu-kien.html?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-30.svg)' }} ></i>
                                                <span className="single-link">Phụ kiện</span>
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
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon_cpu.svg)' }} ></i>
                                                <a href="https://cellphones.com.vn/may-tinh-de-ban.html?itm=menu" className="multiple-link">
                                                    <span>PC ,&nbsp;</span></a><a href="https://cellphones.com.vn/man-hinh.html?itm=menu" className="multiple-link"><span>Màn hình</span>
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
                                        <a href="https://cellphones.com.vn/tivi.html?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg)' }} ></i>
                                                <span className="single-link">Tivi</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/thu-cu-doi-moi?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cellphones.com.vn/media/icons/menu/icon-cps-tcdm.svg)' }} ></i>
                                                <span className="single-link">Thu cũ đổi mới</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/hang-cu.html?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-29.svg)' }} ></i>
                                                <span className="single-link">Hàng cũ</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/danh-sach-khuyen-mai?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: 'url(https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-promotion.svg)' }} ></i>
                                                <span className="single-link">Khuyến mãi</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="label-menu-tree">
                                        <a href="https://cellphones.com.vn/sforum/?itm=menu" target="_self" className="label-item">
                                            <div className="right-content">
                                                <i className="icons-cate" style={{ backgroundImage: "url(https://cdn.cellphones.com.vn/media/icons/menu/icon-cps-tech.svg)" }}></i>
                                                <span className="single-link">Tin công nghệ</span>
                                            </div>
                                            <div className="icon-right">
                                                <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="menu-tree-child columns m-0 box" style={{ display: "none" }}>
                                </div>
                            </div>
                        </div>
                        <div id="dropdown-region" role="menu" className="dropdown"><div className="dropdown-trigger">
                            <div className="box-local-store button__change-province">
                                <div className="box-icon">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                                            <defs></defs>
                                            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                                                <path d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z" className="cls-1"></path>
                                                <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" className="cls-1"></path>
                                            </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="box-content"><p className="title is-flex is-justify-content-space-between">Xem giá tại
                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                                        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                                    </svg>
                                </p> <p>
                                        <span>Hồ Chí Minh</span>
                                    </p></div></div></div>
                        </div>
                        <div className="box-search cps-navbar__search">
                            <form>
                                <div className="cps-group-input is-flex">
                                    <div className="input-group-btn">
                                        <button type="submit" className="pr-0 border-0 shadow-none outline-none text-dark">
                                            <div>
                                                <svg height="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search">
                                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <input id="inp$earch" type="text" placeholder="Bạn cần tìm gì?" autoComplete="off" className="cps-input" />
                                    <span id="btn-close-search" style={{ display: "none" }} >×</span>
                                    <div id="search_autocomplete" className="box-search-result search-autocomplete is-hidden">
                                        <div className="mb-1 category-box is-hidden">
                                            <p className="title-box">Có phải bạn muốn tìm</p>
                                            <div className="list-cate"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="header-overlay"></div>
                        </div>
                        <a href="tel:18002097" className="header-item about-contact button__contact-header">
                            <div className="about__box-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.83 30.94" width="24" height="24">
                                    <defs className="cls-1"></defs>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path d="M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z" className="cls-1">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="about__box-content"><p className="title">Gọi mua hàng<br /> <strong>1800.2097</strong></p></div>
                        </a>
                        <a target="_blank" rel="noopener" href="/" className="header-item about-store button__link-address">
                            <div className="about__box-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                                    <defs className="cls-1"></defs>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z" className="cls-1"></path>
                                            <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" className="cls-1"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="about__box-content"><p className="title">Cửa hàng<br />gần bạn</p></div>
                        </a>
                        <a target="_blank" rel="noopener" href="/" className="header-item about-delivery-tracking button__link-to-history">
                            <div className="about__box-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.22 25.85" height="24">
                                <defs className="cls-1 cls-2 cls-3"></defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <circle cx="7.66" cy="22.02" r="3" className="cls-1"></circle>
                                        <circle cx="24.79" cy="22.02" r="3" className="cls-1"></circle>
                                        <path d="M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6" className="cls-3"></path>
                                        <path d="M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29" className="cls-3"></path>
                                        <path d="M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75" className="cls-3"></path>
                                        <path d="M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08" className="cls-3"></path>
                                        <line x1="43.32" y1="6.97" x2="32.57" y2="6.97" className="cls-3"></line>
                                        <line x1="40.5" y1="11.05" x2="32.57" y2="11.05" className="cls-3"></line>
                                        <line x1="42.09" y1="16.33" x2="38.07" y2="16.33" className="cls-3"></line>
                                    </g>
                                </g>
                            </svg>
                            </div>
                            <div className="about__box-content"><p className="title">Tra cứu<br />đơn hàng</p></div>
                        </a>
                        <a href="/Cart" className="header-item about-cart button__link-to-cart" onClick={() => navigate("/Cart")}>
                            <div className="about__box-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.95 35.07" width="25" height="25">
                                <defs className="cls-1"></defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path d="M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19" className="cls-1"></path>
                                        <path d="M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z" className="cls-1"></path>
                                    </g>
                                </g>
                            </svg>
                            </div>
                            <div className="about__box-content"><p className="title">Giỏ&nbsp;<br />hàng</p> <span id="items_in_cart">0</span></div>
                        </a>
                        <div className="login-btn" onClick={handleClick}>
                            <div className="header-item about-5 about-smember cta-smember button__login">
                                <div className="about__box-icon">
                                    <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20">
                                        <defs className="cls-1"></defs>
                                        <title>Smember</title>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <circle cx="280" cy="280" r="265" className="cls-1"></circle>
                                                <circle cx="280" cy="210" r="115" className="cls-1"></circle>
                                                <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4" className="cls-1"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="about__box-content"><span className="title">Đăng nhập</span></div>
                            </div>
                           
                        </div>
                    </nav>
                </div>
            </header>
            <div className="clear"></div>
            <div className={!isShown ? 'header-overlay' : 'header-overlay active'} ></div>
            {/*Login*/}
            <div id="modalLogin" className={isShowLogin ? 'modal is-active' : 'modal'} >
                <div className="modal-background" onClick={handleClick}></div>
                <div className="modal-content modal-login">
                    <div className="title is-flex is-justify-content-center is-align-items-center">
                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:35/q:80/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png" height="35" alt="cps-smember-icon" className="mr-2" />
                        Smember
                    </div>
                    <div className="text"><p>Vui lòng đăng nhập tài khoản Smember để có trải nghiệm mua sắm tốt hơn</p></div>
                    <div className="group-login-btn is-flex is-justify-content-space-between mt-3">
                        <div className="login-btn modal__button" onClick={handleLogin} >
                            Đăng nhập ngay
                        </div>
                        <div className="register-btn modal__button" onClick={handleRegiter}>
                            Đăng kí
                        </div>
                    </div>
                    <button aria-label="close" className="modal-close is-medium modal__button" onClick={handleClick}></button>
                </div>
            </div>
        </div>
    )
}
export default Header;