import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const PhuKienComponent = () => {
	const navigate = useNavigate();
    //detail
    const loadDetail = (id) => {
      navigate("/product/detail/" + id)
    }
    //show
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4021/product/phukien').then(res =>{
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
			<div className="sp">PHỤ KIỆN</div>
			<div className="dm" />
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
