import '../danh-muc-san-pham/danh-muc-san-pham.css';

export const DanhMucSanPham = () => {
	return (
		<div className="danhmuc">
			<div className="sp">DANH MỤC SẢN PHẨM</div>
			<div className="dm" />
			<div className="list">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-4 col-sm-6 item">
							<img src="/img/aothun1.png" alt />
						</div>
						<div className="col-md-4 col-sm-6 item img">
							<img src="/img/polo1.png" alt />
						</div>
						<div className="col-md-4 col-sm-6 item img">
							<img src="/img/somi1.png" alt />
						</div>
						<div className="col-md-3 col-sm-6 item none img">
							<img src="/img/vòng tay 1 1 (1).png" alt />
						</div>
					</div>
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
