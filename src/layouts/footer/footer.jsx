import { Link } from 'react-router-dom';
import React from 'react';

export const FooterComponent = () => {
	return (
		<div>
			<div className="khuyenmai d-flex justify-content-around align-items-center">
				<h3 className="fs-2">Nhận thông tin khuyến mãi từ chúng tôi</h3>
				<div className="tk d-flex">
					<input
						type="email"
						placeholder="Hãy nhập email của bạn"
						className="border border-0 bg-white p-2"
					/>
					<button className="bg-black text-white px-4 text-center">Gửi</button>
				</div>
			</div>

			<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top">
				<div className="col mb-3">
					<Link
						to="/"
						className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
					>
						<img src="/img/logo1.jpg" alt />
					</Link>
					<ul>
						<li>
							<a href className="d-flex gap-4 align-items-center">
								<i className="fa-solid fa-phone" />
								<div className="conten">
									<p>Hotline</p>
									<p>3979682222</p>
								</div>
							</a>
						</li>
						<li>
							<a href className="d-flex align-items-center gap-4">
								<i className="fa-solid fa-clock" />
								<p>
									Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2
									đến Chủ nhật
								</p>
							</a>
						</li>
						<li>
							<a href className="d-flex align-items-center gap-4">
								<i className="fa-solid fa-location-dot" />
								<p>
									Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba
									Đình, TP Hà Nội
								</p>
							</a>
						</li>
					</ul>
				</div>
				<div className="col mb-3" />
				<div className="col mb-3 px-4 section text-center">
					<h3>Về chúng tôi</h3>
					<ul className="nav flex-column">
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Trang chủ
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Giới thiệu
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Sản phẩm
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Tin tức
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Liên hệ
							</Link>
						</li>
					</ul>
				</div>
				<div className="col mb-3 px-4 section text-center">
					<h3>Hỗ trợ khách hàng</h3>
					<ul className="nav flex-column">
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Trang chủ
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Giới thiệu
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Sản phẩm
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Tin tức
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Liên hệ
							</Link>
						</li>
					</ul>
				</div>
				<div className="col mb-3 mt-4 section text-center">
					<h3 className="section" style={{ marginTop: 60 }}>
						Dịch vụ
					</h3>
					<ul className="nav flex-column">
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Trang chủ
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Giới thiệu
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Sản phẩm
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								FAQs
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="#" className="nav-link p-0 text-body-black">
								Tin tức
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};
