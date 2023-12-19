import './admin-page.css';
import './style.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { LayoutDefault } from '../../layouts';
import React from 'react';

const AdminPhukienPage = () => {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const LoadEdit = (id) => {
		navigate('/admin/update/' + id);
	};
	// delete
	const Remove = (id) => {
		if (window.confirm('Do you want to remove')) {
			fetch('https://datn-be-fpoly-hcm.vercel.app/product/deleteproduct/' + id, {
				method: 'DELETE',
			})
				.then((res) => {
					if (res.ok) {
						alert('Remove successfully.');
						window.location.reload();
					} else {
						throw new Error('Fales to remove');
					}
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	useEffect(() => {
		fetch(`https://datn-be-fpoly-hcm.vercel.app/product/phukien1`)
			.then((res) => {
				return res.json();
			})
			.then((resp) => {
				setProduct(resp);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<LayoutDefault>
			<main className="main-admin">
				<div className="navv">
					<ul>
						<li>
							<Link to={'/admin'}>
								<img src="/img/User_cicrle_light.png" className="user" alt />
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								<img src="/img/Rectangle 83.png" alt /> Tất cả sản phẩm
							</Link>
						</li>
						<li>
							<Link to={'/adminaothun'}>
								<img src="/img/Rectangle 81.png" alt /> ÁO THUN
							</Link>
						</li>
						<li>
							<Link to={''}>
								<img src="/img/Rectangle 81.png" alt />
								ÁO POLO
							</Link>
						</li>
						<li>
							<Link to={'/adminaosomi'}>
								<img src="/img/Rectangle 81.png" alt />
								ÁO SƠ MI
							</Link>
						</li>
						<li>
							<Link to={''}>
								<img src="/img/Rectangle 81.png" alt />
								PHỤ KIÊN
							</Link>
						</li>
					</ul>
				</div>
				<div class="table-container">
					<Helmet>
						<link
							rel="stylesheet"
							href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
						/>
					</Helmet>
					{/* <button className='btn float-right'><Link to="/"><i class="fa-solid fa-xmark">Exit</i></Link></button> */}
					<div className="container">
						<div className="card">
							<div className="card-title "></div>
							<div className="card-body">
								<div className="add">
									<Link to="/admin/add" className="btn btn-success m-1">
										Add Product
									</Link>
								</div>
								<table className="table table-bodered">
									<thead className="bg-dark text-white">
										<tr>
											<td>ID</td>
											<td>Name</td>
											<td>Image</td>
											<td>Price</td>
											<td>Sort Description</td>
											<td>Description</td>
											<td>Action</td>
										</tr>
									</thead>
									<tbody>
										{product &&
											product.map((item) => (
												<tr key={item.id}>
													<td>{item.id}</td>
													<td>{item.productname}</td>
													<td>
														<img
															src={item.urlimage}
															style={{ width: '100px' }}
														/>
													</td>

													<td>{item.price}</td>
													<td>{item.sortdes}</td>
													<td>{item.description}</td>
													<td>
														<a
															onClick={() => {
																LoadEdit(item.id);
															}}
															className="btn btn-success m-1 "
														>
															Edit
														</a>
														<a
															onClick={() => {
																Remove(item.id);
															}}
															className="btn btn-danger"
														>
															Delete
														</a>
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</LayoutDefault>
	);
};

export default AdminPhukienPage;
