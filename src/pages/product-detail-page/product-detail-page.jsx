import './product-detail.css';

import { LayoutDefault } from '../../layouts';
import React from 'react';

const ProductDetailPage = () => {
	return (
		<LayoutDefault>
			<main className="product-detail">
				<div className="container mb-5">
					<div className="img">
						<img src="/img/a5 4.png" className="img1" />
						<div className="item-img">
							<img src="/img/a5 4.png" alt />
							<img src="/img/mota1 2.png" alt />
							<img src="/img/mota3 2.png" alt />
							<img src="/img/mota4 2.png" alt />
						</div>
					</div>
					<div className="conten lh-base">
						<h3 className="fw-bold fs-2 mb-4">
							Áo polo MAX POWER tone đỏ đô sang - xịn - mịn
						</h3>
						<div className="price text-black fw-bold fs-3 mb-4">
							Giá: 390.000đ
						</div>
						<h4 className="fs-3">Size</h4>
						<div className="size d-flex gap-3">
							<h4>M</h4>
							<h4>L</h4>
							<h4>XL</h4>
						</div>
						<div className="button">
							<button>Thêm giỏ hàng</button>
							<button>Mua ngay</button>
						</div>
						<p>Chi tiết sản phẩm:</p>
						<p>Form áo OVERSIZE ÂU MỸ.</p>
						<p>Nỉ bông Định lượng 380gsm Tag logo được gắn ở tay áo.</p>
						<p>Tem chống hàng giả của SWE được may trong sườn áo.</p>
						<p>
							Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
						</p>
						<br />
						<p>* LƯU Ý: Hạn chế sử dụng máy sấy nhiệt cao để giữ form áo.</p>
						<p>- Hướng dẫn bảo quản:</p>
						<ul>
							<li>
								Không nên sử dụng chất tẩy mạnh, khuyến khích sử dụng nước xả
								quần áo.
							</li>
							<li>Không phơi trực tiếp dưới ánh nắng mặt trời.</li>
							<li>
								Khuyến khích giặt tay để đảm bảo chất lượng tốt nhất của sản
								phẩm.
							</li>
							<li>Hạn chế treo sản phẩm bằng móc áo.</li>
						</ul>
					</div>
				</div>
			</main>
		</LayoutDefault>
	);
};

export default ProductDetailPage;
