import {
	AdminPage,
	AdminAoThunPage,
	AdminAoPoloPage,
	AdminAoSomiPage,
	AdminPhukienPage,
	DatHangPage,
	DatHangThanhCong,
	HomePage,
	LoginPage,
	PoloPage,
	PhuKienPage,
	ProductDetailPage,
	QuanShortPage,
	RegisterPage,
	
} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/adminpage/ProductAdd';
import UpdateProduct from './pages/adminpage/ProductUpdate';
import DetailProduct from './pages/DetailProduct';
import AoThunPage from './pages/aothun-page/aothun-page';
import AosomiPage from './pages/aosomi-page/aosomi-page';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
				<Route path="/quan-short" element={<QuanShortPage />}></Route>
				<Route path="/aopolo" element={<PoloPage />}></Route>
				<Route path="/aothun" element={<AoThunPage />}></Route>
				<Route path="/aosomi" element={<AosomiPage />}></Route>
				<Route path="/phukien" element={<PhuKienPage />}></Route>

				<Route path="/detail" element={<ProductDetailPage />}></Route>
				<Route path="/dathang" element={<DatHangPage />}></Route>
				<Route
					path="/dathangthanhcong"
					element={<DatHangThanhCong />}
				></Route>

				<Route path="/admin" element={<AdminPage />}></Route>
				<Route path="/adminaothun" element={<AdminAoThunPage />}></Route>
				<Route path="/adminaopolo" element={<AdminAoPoloPage />}></Route>
				<Route path="/adminaosomi" element={<AdminAoSomiPage />}></Route>
				<Route path="/adminphukien" element={<AdminPhukienPage />}></Route>

				<Route path="/admin/add" element={<AddProduct />}></Route>
				<Route path="/admin/update/:proid" element={<UpdateProduct />}></Route>
				<Route path='/product/detail/:proid' element={<DetailProduct/>}></Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
