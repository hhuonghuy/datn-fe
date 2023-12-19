import { useLocation } from 'react-router-dom';
import { LayoutDefault } from '../../layouts';

import React from 'react';

const DatHangThanhCong = (props) => {
  const { orderNumber } = props;
  const location = useLocation();
  const receivedOrderNumber = orderNumber || (location.state && location.state.orderNumber);

  return (
    <LayoutDefault>
      <div className="title d-flex ps-5 py-3" style={{ background: '#d9d9d9' }}>
        <i className="fa-solid fa-house" />
        <h3>/ Đặt hàng thành công</h3>
      </div>
      <main>
        <div className="container flex-column lh-base" style={{ padding: '50px' }}>
          <p>T P H B xin cảm ơn bạn đã đặt hàng. Đơn hàng của bạn sẽ sớm được xử lý.</p>
          <p>Thông tin đơn hàng</p>
          <p>Mã đơn hàng: #{receivedOrderNumber}</p>
          <hr />
        </div>
      </main>
    </LayoutDefault>
  );
};

export default DatHangThanhCong;
