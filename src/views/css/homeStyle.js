import styled from 'styled-components';
// 
export const HomeStyle = styled.div.attrs(props => ({
    color: props.color || 'pink',
    size: props.size || 30
})
)`
    border: 1px solid red;
    padding: 5px;
    width:auto;
    height:${props => props.theme.height};
    span{
        font-weight: bold;
        font-size: ${props => props.size}px;
        color: ${props => props.color};
    }
`

// 高级特性
export const ExtendStyle = styled(HomeStyle)`
    .text{
        color:#ad7894;
        font-size: 100px;
    }
`