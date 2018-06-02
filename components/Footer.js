
import { Row, Col, Icon } from 'antd';

export default () => (
  <div>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <aside className="footer-box catanis-widget cata-widget-aboutus-info widget-container" id="catanis-widget-about-contact-2">
          <div className="cata-aboutus-info">
            <p className="cata-footer-logo">
              <img src="/static/images/logow.png" alt="About Us"/>
            </p>
            <div className="cata-desc">
              <p>Your Wedding - Your Way</p>
            </div>
            <ul>
              <li className="cata-office">
                <Icon type="environment-o" /> 61 Hoa Đào, P2, Phú Nhuận, Tp.HCM
              </li>
              <li className="cata-phone">
                <Icon type="mobile" /> <a href="tel:+8401649950995">0164 995 0995</a>
              </li>
              <li className="cata-email">
                <Icon type="mail" /> <a href="mailto:thiepcuoitanchau@gmail.com">thiepcuoitanchau@gmail.com</a>
              </li>
            </ul>
          </div>
        </aside>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
    <Row>
    </Row>
    <style jsx>{`
      div {
        background-color: #1B1B1B;
        color: #bbb;
      }
      .cata-widget-aboutus-info ul li {
        margin-bottom:5px;
        list-style: none;
      }
      .cata-widget-aboutus-info ul li i{padding:0 5px 0 1px}
      .cata-widget-aboutus-info .cata-footer-logo{margin-bottom:20px}
      .cata-widget-aboutus-info .cata-footer-logo img{margin-bottom:10px;max-height:45px}
      .cata-widget-aboutus-info .cata-desc{margin-bottom:20px}
    `}
    </style>
  </div>
)