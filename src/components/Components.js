import React from 'react'
import styled from '@emotion/styled'

const StyledSmallText = styled.div`
  font-size: 2rem;
`

export const SmallText = ({ children }) => (
  <StyledSmallText>
    {children}
  </StyledSmallText>
)
