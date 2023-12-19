import './homepage.module.css';

import {
	AoNamComponent,
	BannerComponent,
	DanhMucSanPham,
	PhuKienComponent,
	SanPhamBanChay,
	SanPhamKhac,
} from '../../components';

import { LayoutDefault } from '../../layouts';
import React from 'react';

const HomePage = () => {
	return (
		<LayoutDefault>
			{/* ======================= banner ======================= */}
			<BannerComponent />

			{/* ======================= danh mục sản phẩm ======================= */}
			<DanhMucSanPham />
			{/* ======================= sản phẩm bán chạy ======================= */}
			<SanPhamBanChay />

			{/* ======================= áo nam ======================= */}
			<AoNamComponent />

			{/* ======================= phụ kiện ======================= */}
			<PhuKienComponent />

			

			{/* ======================= sản phẩm khác ======================= */}
			{/* <SanPhamKhac /> */}
		</LayoutDefault>
	);
};

export default HomePage;
