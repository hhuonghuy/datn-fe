import '../dtProduct/style.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DatHangPage } from '../../pages';
import { LayoutDefault } from '../../layouts';
import React from 'react';

const DtProduct = () => {
	const { proid } = useParams();
	const navigate = useNavigate();
	const [prodata, setProdata] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('https://datn-be-fpoly-hcm.vercel.app/product/' + proid)
			.then((res) => res.json())
			.then((resp) => {
				console.log(resp);
				setProdata(resp);
			})
			.catch((err) => {
				console.error(err.message);
			});
	}, [proid]);

	const addToCart = (item) => {
		setCart([...cart, item]);
		localStorage.setItem('cart', JSON.stringify([...cart, item]));
		alert('Sản phẩm đã được thêm vào giỏ hàng!');
	};

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
		setCart(storedCart);
	}, []);

	const viewCart = () => {
		navigate('/dathang');
	};

	return (
		<LayoutDefault>
			<main className="product-detail">
				<div className="container mb-5">
					{prodata &&
						prodata.map((item) => (
							<div key={item._id}>
								<div className="img">
									<img src={item.urlimage} alt="" />
								</div>

								<div className="product-info">
									<h3>
										{' '}
										<div className="fw-bold fs-2 mb-4">
											<h1>{item.productname}</h1>
											<h2>by TPHB STORE</h2>
											<p>{item.description}</p>
										</div>
									</h3>
									<div className="price text-black fw-bold fs-3 mb-4">
										<p>
											<span>{item.price} VNĐ</span>
										</p>
										<button
											className="button"
											type="button"
											onClick={() => addToCart(item)}
										>
											ADD TO CART
										</button>
									</div>
								</div>
							</div>
						))}

					{/* <button className='viewcart' type="button" onClick={viewCart}>
                VIEW CART
            </button> */}

					{/*                     
					<div className="img">
						<img src="/img/a5 4.png" className="img1" />
						
					</div> */}
					{/* <div className="conten lh-base">
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
					</div> */}
				</div>
			</main>
		</LayoutDefault>
	);
};

export default DtProduct;
