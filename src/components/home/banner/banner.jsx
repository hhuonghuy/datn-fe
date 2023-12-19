import React from 'react';

export const BannerComponent = () => {
	return (
		<>
			<div className="banner">
				<div id="carouselExampleCaptions" className="carousel slide">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={0}
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={1}
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={2}
							aria-label="Slide 3"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="/img/banner1.png" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block"></div>
						</div>
						<div className="carousel-item">
							<img src="/img/banner2.png" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block"></div>
						</div>
						<div className="carousel-item">
							<img src="/img/banner3.png" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="dichvu">
				<div className="list">
					<div className="item">
						<div className="img">
							<img
								src="/img/vs.png"
								alt
								style={{ marginTop: 10, marginLeft: 12 }}
							/>
						</div>
						<h4>VẬN CHUYỆN TOÀN CẦU</h4>
						<p>
							Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng giá trị đến
							2.000.000Đ
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/img/dt.png" alt />
						</div>
						<h4>VẬN CHUYỆN TOÀN CẦU</h4>
						<p>
							Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng giá trị đến
							2.000.000Đ
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/img/qua.png" alt />
						</div>
						<h4>QUÀ TẠNG HẤP DẪN</h4>
						<p>
							Chương trình khuyến mãi cực lớn và hấp dẫn vào mỗi chủ nhật hàng
							tuần
						</p>
					</div>
					<div className="item">
						<div className="img">
							<img src="/img/doitra.png" alt />
						</div>
						<h4>MIỄN PHÍ ĐỔI TRẢ</h4>
						<p>
							Miễn phí đổi trả trong vòng 15 ngày đầu tiên áp dụng cho tất cả
							các mặt hàng
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
