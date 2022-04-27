import styled from "styled-components/native";
import { flexbox, FlexboxProps } from "styled-system";

interface Props extends FlexboxProps {
    children: React.ReactNode
}

const Container = styled.View<Props>`
    ${flexbox}
`

export default Container