// START: import-packages
import { ReactNode } from 'react'
import styled from 'styled-components'

// START: component-container
const Container = (props: IContainer) => {
    const { children, maxWidth, pT, pB, pR, pL } = props;
    return (
        <SContainer
            maxWidth={maxWidth}
            pT={pT}
            pB={pB}
            pR={pR}
            pL={pL}
        >
            {children}
        </SContainer>
    )
}
export default Container;

// START: data-types
interface IContainer {
    children: ReactNode
    maxWidth?: string
    pT?: string 
    pB?: string
    pL?: string
    pR?: string
}

// START: styling
const SContainer = styled.div<IContainer>`
    /* position: relative;
    z-index: 4; */

    max-width: ${p => `${p.maxWidth}`};
    margin: 0 auto;
    padding: ${p => `${p.pT} ${p.pB} ${p.pL} ${p.pR}`};
`
// START: default-props
Container.defaultProps  = {
    maxWidth: '1760px',
    pT: '0',
    pB: '0',
    pL: '0',
    pR: '0',
}
