import '../san-pham-ban-chay/san-pham-ban-chay.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
export const SanPhamBanChay = () => {
	const navigate = useNavigate();
    //detail
    const loadDetail = (id) => {
      navigate("/product/detail/" + id)
    }
    //show
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4021/product/producthot').then(res =>{
        return res.json();
      }).then((resp) => {
          setProduct(resp);
          console.log(resp)
      }).catch((err) => {
        console.log(err.message);
      })
    }, [])
	return (
		<div className="top">
			<div className="sp">TOP SẢN PHẨM BÁN CHẠY</div>
			<div className="dm" />
			<div className="n-ao d-flex justify-content-center gap-5 mt-5">
				<a href="/aothun"><button>Áo Thun</button></a>
				<a href="/aopolo"><button>Áo Polo</button></a>
				<a href="/aosomi"><button>Áo Somi</button></a>
				
				
			</div>
			<div className="list">
				<div className="container text-center">
					<div className="row">
					<div className='products'>
          {
            product &&
                product.map((item) => (
                  <div className="product" key={item._id}>
                      <img className='image'
                        src={item.urlimage}
                        alt={item.productname}
                      />
                    <div className="nameprice">
                       <a onClick={() => {loadDetail(item.id) }}><h3>{item.productname}</h3></a>
                          <span>{item.price}VNĐ</span>
                    </div>
                        <p>{item.sortdes}</p>
						
                    <div className='buy'>
                      <button onClick={() => {loadDetail(item.id)}}>Buy</button>
                    </div>
                  </div>
                ))
          }

          
        </div>
						
					</div>
					<br />
					<div className="an d-flex gap-5 justify-content-center">
						<span className="active" />
						<span />
					</div>
				</div>
			</div>
		</div>
	);
};
