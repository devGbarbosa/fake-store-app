import styled from 'styled-components/native'
import {
  flexbox,
  FlexboxProps,
  BorderProps,
  border,
  color,
  ColorProps,
  SpaceProps,
  space,
  LayoutProps,
  layout,
} from 'styled-system'

interface Props
  extends FlexboxProps,
    BorderProps,
    ColorProps,
    SpaceProps,
    LayoutProps {}

const Container = styled.View<Props>`
  ${flexbox}
  ${border}
  ${color}
  ${space}
  ${layout}
`

export default Container
