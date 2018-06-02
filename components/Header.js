import Link from 'next/link'
import { withRouter } from 'next/router'
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class MyHeader extends React.Component {
  render() {
    const { router: { pathname } } = this.props;
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '40px' }}
        >
          <Menu.Item key="/">
            <Link prefetch href='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link prefetch href='/about'>About</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(MyHeader)
