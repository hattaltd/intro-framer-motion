//* START: import-packages-components-etc
import { Header, Footer } from './index';
import { ReactNode } from 'react';

//* START: data-types
type ChildrenProps = {
    children?: ReactNode
}

// START: component-layout
const Layout = ({ children }:ChildrenProps) => {
    return (
        <>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </>
    )
}
export default Layout;
