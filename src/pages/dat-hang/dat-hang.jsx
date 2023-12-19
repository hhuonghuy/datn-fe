import './dat-hang.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDefault } from '../../layouts';
// import DatHangThanhCong from '../dat-hang-thanh-cong/dat-hang-thanh-cong';

const DatHangPage = () => {
	const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const orderNumber = 'generateOrderNumber()';

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
	localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrease = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        const updatedQuantity = parseInt(item.quantity, 10) || 0;
        return { ...item, quantity: updatedQuantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price) || 0;
        const itemQuantity = parseInt(item.quantity, 10) || 0;
        return acc + itemPrice * itemQuantity;
      }, 0);
      return total;
    } else {
      return 0;
    }
  };

  

  const handleCheckout = () => {
    // Thực hiện đặt hàng và tạo mã đơn hàng
    const orderNumber = generateOrderNumber();

    // Reset giỏ hàng sau khi đặt hàng
    setCartItems([]);
    localStorage.removeItem("cart");

    // Chuyển hướng đến trang xác nhận đặt hàng
    navigate(`/dathangthanhcong`,{ state: {orderNumber,cartItems}});
  };

  
  const generateOrderNumber = () => {
    // Logic để tạo mã đơn hàng duy nhất, có thể sử dụng timestamp hoặc mã duy nhất từ server
    return 'ORDER_' + new Date().getTime();
  };
	return (
		<LayoutDefault>
			
			<main className="dat-hang product-detail">
				<div className="ttgiohang ps-5 py-3" style={{ background: '#d9d9d9' }}>
					<h3>/ Thông tin giỏ hàng của bạn</h3>
				</div>
				<div className="container">
					<div>
						<div
							style={{ borderBottom: '2px solid #d9d9d9', display: 'block' }}
						>
							<h2 className="pb-2 h2">CHI TIẾT ĐƠN HÀNG</h2>
						
						</div>
						<div>
      

      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item._id}>
              <img  src={item.urlimage} alt={item.productname} /><br /><div>{item.productname} - $ {item.price} VNĐ - SL: {item.quantity}</div> <br />
              <button className='xoa' onClick={() => handleRemove(item._id)}>Xóa </button>
              <button className='giam' onClick={() => handleDecrease(item._id)}>-</button>
              <button className='tang' onClick={() => handleIncrease(item._id)}>+</button>
            </li>
          ))
        ) : (
          <li key="empty">No items in the cart</li>
        )}
      </ul>

      <p className='total'>Total: {calculateTotal()} VNĐ</p>
      {/* <DatHangThanhCong orderNumber={orderNumber} /> */}

      <button className='button' onClick={handleCheckout}>Đặt Hàng</button>
    </div>
					</div>
					<div>
						<form action>
							<h2 style={{ marginLeft: '-20px' }}>NGƯỜI MUA / NHẬN HÀNG</h2>
							<div className="mb-3">
								<label htmlFor="formGroupExampleInput" className="form-label">
									Họ và tên
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Họ và tên"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="formGroupExampleInput" className="form-label">
									Số điện thoại
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Số điện thoại"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="formGroupExampleInput2" className="form-label">
									Nhận hàng tại nhà / công ty / bưu điện
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput2"
									placeholder="Địa chỉ nhận hàng"
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label"
								>
									Ghi chú
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={5}
									defaultValue={''}
								/>
							</div>
							<div className="div" />
							<hr />
							<button>CHỌN THÊM SẢN PHẨM KHÁC</button>
						</form>
					</div>
				</div>
			</main>
		</LayoutDefault>
	);
};

export default DatHangPage;
