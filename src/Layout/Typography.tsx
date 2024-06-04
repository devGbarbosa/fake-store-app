import styled from 'styled-components/native'
import {
  typography,
  TypographyProps
} from 'styled-system'

interface Props
  extends TypographyProps {
  children: React.ReactNode
}

const Typography = styled.Text<Props>`
  ${typography}
`

export default Typography
