import React from 'react';

export const AoNamComponent = () => {
	return (
		<div className="aonam block">
			<h1>
				ÁO NAM
				<div className="dm" />
			</h1>
			<div className="ao">
				<div className="list">
					<div className="item1">
						<div className="item">
							<img src="/img/Whitelow.png" alt />
							<div className="name text-center">Whitelow</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
						<div className="item">
							<img src="/img/Blackdara.png" alt />
							<div className="name text-center">Blackdara</div>
							<div className="price text-center">5.600.000đ</div>
						</div>
					</div>
					<div className="item2 px-3">
						<img src="/img/sale.png" className="mb-4" alt />
						<div className="none">
							<div className="an d-flex gap-5 justify-content-center">
								<span className="active" />
								<span />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="rows">
					<div className="col-md-3 col-sm-6 img">
						<img src="/img/Bitamablue.png" alt />
						<div className="name text-center">Bitamablue</div>
						<div className="price text-center">5.600.000đ</div>
					</div>
					<div className="col-md-3 col-sm-6 img">
						<img src="/img/Miqeok.png" alt />
						<div className="name text-center">Miqeok</div>
						<div className="price text-center">5.600.000đ</div>
					</div>
					<div className="col-md-3 col-sm-6 img">
						<img src="/img/Minuawe.png" alt />
						<div className="name text-center">Minuawe</div>
						<div className="price text-center">5.600.000đ</div>
					</div>
					<div className="col-md-3 col-sm-6 img">
						<img src="/img/polo1.png" alt />
						<div className="name text-center">Pawaqa</div>
						<div className="price text-center">5.600.000đ</div>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="an d-flex gap-5 justify-content-center \">
					<span className="active" />
					<span />
				</div>
			</div>
		</div>
	);
};
