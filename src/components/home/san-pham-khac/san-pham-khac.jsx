import '../san-pham-khac/san-pham-khac.css';

import React from 'react';

export const SanPhamKhac = () => {
	return (
		<div className="top">
			<div className="sp">NHỮNG SẢN PHẨM KHÁC</div>
			<div className="dm" />
			<div className="list">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 2 1.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 1 (1).png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 2.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 3.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
					</div>
					<div className="row block">
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 2 1.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 1 (1).png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 2.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="col-md-3 col-sm-6 item">
							<img src="/img/vòng tay 1 3.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
					</div>
					<br />
					<button
						style={{
							width: 323,
							height: 78,
							borderRadius: 5,
							background: 'rgba(217, 217, 217, 0.77)',
							marginBottom: 60,
							boxShadow: '2px 5px 1px #bfbcbc',
						}}
					>
						Xem Thêm
					</button>
				</div>
			</div>
		</div>
	);
};
