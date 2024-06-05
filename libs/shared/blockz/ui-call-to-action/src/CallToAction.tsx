import React from 'react';
import { Pressable } from 'react-native';
import styled, { css } from '@emotion/native';

export function CallToAction() {
  return (
    <Pressable role="button" style={({ pressed }) => pressed ? pressedStyles : buttonStyles}>
      <StyledText>Call To Action</StyledText>
    </Pressable>
  );
}

const buttonStyles = css`
  background-color: purple;
  padding: 10px 40px;
  border-radius: 5px;
  align-self: flex-start;
`

const pressedStyles = css`
  ${buttonStyles};
  background-color: aqua;
`

const StyledText = styled.Text`
  color: white;
`;
