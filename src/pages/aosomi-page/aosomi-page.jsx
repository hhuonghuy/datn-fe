import { LayoutDefault } from '../../layouts';
import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AosomiPage = () => {
	const navigate = useNavigate();
    //detail
    const loadDetail = (id) => {
      navigate("/product/detail/" + id)
    }
    //show
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4021/product/aosomi').then(res =>{
        return res.json();
      }).then((resp) => {
          setProduct(resp);
          console.log(resp)
      }).catch((err) => {
        console.log(err.message);
      })
    }, [])
	return (
		<LayoutDefault>
			<main>
				<div className="top">
					<div
						className="sp"
						style={{
							textAlign: 'center',
							fontSize: 50,
							wordWrap: 'break-word',
							marginBottom: 30,
							paddingTop: 70,
						}}
					>
						ÁO Sơ Mi
					</div>
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
							<div className="trang d-flex justify-content-center gap-5">
								<p className="active">1</p>
								<p>2</p>
								<p>3</p>
								<p>4</p>
								<p>&gt;&gt;</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</LayoutDefault>
	);
};
export default AosomiPage;
