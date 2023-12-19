import '../header/header.css';

import { Link } from 'react-router-dom';
import React from 'react';

export const HeaderComponent = () => {
	return (
		<div>
			<div className="sale">
				<marquee behavior="" direction="right">
					<h3 style={{ fontWeight: 'bold' }}>Sale off to 30%</h3>
				</marquee>
			</div>
			<header>
				<div className="navDiv">
					<label htmlFor="menu">
						<i className="fa-solid fa-bars" />
					</label>
				</div>
				<div className="logo mb-3">
					<img src="/img/logo1.jpg" alt />
				</div>
				<input type="checkbox" id="menu" />
				<ul className="nav">
					<label htmlFor="menu">
						<i className="fa-solid fa-xmark" />
					</label>
					<li className="hover">
						<Link to="/">Trang Chủ</Link>
					</li>
					<li className="hover">
						<a href="#skill">Giới Thiệu</a>
					</li>
					<div className="dropdown">
						<button className="dropdown-btn" style={{}}>
							Sản Phẩm
							<i className="fa-solid fa-arrow-down" style={{ fontSize: 15 }} />
						</button>
						<div
							className="dropdown-content rounded-2"
							style={{ marginLeft: -17 }}
						>
							<Link to="/aopolo" className="btn">
								Áo Polo
							</Link>
							<Link to="/aothun" className="btn">
								Áo Thun
							</Link>
							<Link to="/aosomi" className="btn">
								Áo Sơmi
							</Link>
							<Link to="/phukien" className="btn">
								Phụ Kiện
							</Link>
						</div>
					</div>
					<li className="hover">
						<a href="#project">Tin Tức</a>
					</li>
					<li className="hover">
						<a href="#contact">Liên Hệ</a>
					</li>
				</ul>
				<div className="tk d-flex gap-2">
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={45}
							height={45}
							viewBox="0 0 45 45"
							fill="none"
						>
							<g clipPath="url(#clip0_437_66)">
								<path
									d="M44.3848 38.9087L35.6221 30.146C35.2266 29.7505 34.6904 29.5308 34.1279 29.5308H32.6953C35.1211 26.4282 36.5625 22.5259 36.5625 18.2808C36.5625 8.18213 28.3799 -0.000488281 18.2812 -0.000488281C8.18262 -0.000488281 0 8.18213 0 18.2808C0 28.3794 8.18262 36.562 18.2812 36.562C22.5264 36.562 26.4287 35.1206 29.5312 32.6948V34.1274C29.5312 34.6899 29.751 35.2261 30.1465 35.6216L38.9092 44.3843C39.7354 45.2104 41.0713 45.2104 41.8887 44.3843L44.376 41.897C45.2021 41.0708 45.2021 39.7349 44.3848 38.9087ZM18.2812 29.5308C12.0674 29.5308 7.03125 24.5034 7.03125 18.2808C7.03125 12.0669 12.0586 7.03076 18.2812 7.03076C24.4951 7.03076 29.5312 12.0581 29.5312 18.2808C29.5312 24.4946 24.5039 29.5308 18.2812 29.5308Z"
									fill="white"
									fillOpacity="0.8"
								/>
							</g>
							<defs>
								<clipPath id="clip0_437_66">
									<rect
										width={45}
										height={45}
										fill="white"
										transform="translate(0 -0.000488281)"
									/>
								</clipPath>
							</defs>
						</svg>
					</a>
					<a href="">
						<Link to="/login" className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={45}
								height={49}
								viewBox="0 0 45 49"
								fill="none"
							>
								<path
									d="M10.9687 34.7117C12.5625 33.4163 14.3437 32.3947 16.3125 31.6467C18.2812 30.8987 20.3437 30.5253 22.5 30.5267C24.6562 30.5267 26.7187 30.9007 28.6875 31.6487C30.6562 32.3966 32.4375 33.4177 34.0312 34.7117C35.125 33.3499 35.9769 31.8054 36.5869 30.0783C37.1969 28.3511 37.5012 26.5077 37.5 24.548C37.5 20.1304 36.0394 16.3685 33.1181 13.2623C30.1969 10.156 26.6575 8.60358 22.5 8.60491C18.3437 8.60491 14.8044 10.1574 11.8819 13.2623C8.95937 16.3672 7.49875 20.1291 7.5 24.548C7.5 26.5077 7.805 28.3511 8.415 30.0783C9.025 31.8054 9.87625 33.3499 10.9687 34.7117ZM22.5 26.5409C20.6562 26.5409 19.1012 25.8686 17.835 24.5241C16.5687 23.1796 15.9362 21.5268 15.9375 19.5658C15.9375 17.6061 16.57 15.9533 17.835 14.6075C19.1 13.2616 20.655 12.5894 22.5 12.5907C24.3437 12.5907 25.8987 13.263 27.165 14.6075C28.4312 15.952 29.0637 17.6048 29.0625 19.5658C29.0625 21.5255 28.43 23.1782 27.165 24.5241C25.9 25.8699 24.345 26.5422 22.5 26.5409ZM22.5 44.4769C19.9062 44.4769 17.4688 43.9534 15.1875 42.9065C12.9062 41.8595 10.9219 40.4399 9.23438 38.6477C7.54688 36.8541 6.21125 34.7449 5.2275 32.3203C4.24375 29.8956 3.75125 27.3048 3.75 24.548C3.75 21.7912 4.2425 19.2004 5.2275 16.7757C6.2125 14.3511 7.54813 12.2419 9.23438 10.4483C10.9219 8.65474 12.9062 7.23514 15.1875 6.18953C17.4688 5.14393 19.9062 4.62047 22.5 4.61914C25.0937 4.61914 27.5312 5.14261 29.8125 6.18953C32.0937 7.23646 34.0781 8.65606 35.7656 10.4483C37.4531 12.2419 38.7894 14.3511 39.7744 16.7757C40.7594 19.2004 41.2512 21.7912 41.25 24.548C41.25 27.3048 40.7575 29.8956 39.7725 32.3203C38.7875 34.7449 37.4519 36.8541 35.7656 38.6477C34.0781 40.4413 32.0937 41.8615 29.8125 42.9085C27.5312 43.9554 25.0937 44.4782 22.5 44.4769Z"
									fill="white"
									fillOpacity="0.8"
								/>
							</svg>
						</Link>
					</a>

					<a href="">
						<Link to="/dathang" className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={45}
								height={45}
								viewBox="0 0 45 45"
								fill="none"
							>
								<path
									d="M8.4375 8.4375H42.1875L37.9688 26.7188H12.6562M37.9688 32.3438H14.0625L7.03125 2.8125H2.8125"
									stroke="white"
									strokeOpacity="0.8"
									strokeWidth={5}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M35.1562 40.7812C36.7096 40.7812 37.9688 39.5221 37.9688 37.9688C37.9688 36.4154 36.7096 35.1562 35.1562 35.1562C33.6029 35.1562 32.3438 36.4154 32.3438 37.9688C32.3438 39.5221 33.6029 40.7812 35.1562 40.7812Z"
									stroke="white"
									strokeOpacity="0.8"
									strokeWidth={5}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16.875 40.7812C18.4283 40.7812 19.6875 39.5221 19.6875 37.9688C19.6875 36.4154 18.4283 35.1562 16.875 35.1562C15.3217 35.1562 14.0625 36.4154 14.0625 37.9688C14.0625 39.5221 15.3217 40.7812 16.875 40.7812Z"
									stroke="white"
									strokeOpacity="0.8"
									strokeWidth={5}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					</a>
				</div>
			</header>
		</div>
	);
};
