import { Layout } from 'antd'
import Footer from './Footer';

export default ({ children }) => (
  <Layout>
    {children}
    <Footer>footer</Footer>
  </Layout>
)
