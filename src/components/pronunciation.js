import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Icon, TransparentButton } from '@ds';

const StyledIcon = styled(Icon)`
  transition: background-color ${(props) => props.theme.animations.easeIn};
`;

const PronunciationContainer = styled(Box)`
  :hover ${StyledIcon} {
    background-color: ${(props) => props.theme.colors.brand.main};
  }
`;

const PronunciationButton = styled(TransparentButton)`
  :focus ${StyledIcon} {
    background-color: ${(props) => props.theme.colors.brand.main};
  }
`;

const Audio = styled.audio`
  display: none;
`;

export const Pronunciation = () => {
  const nameAudioRef = useRef(null);

  return (
    <PronunciationContainer as="span">
      Varun Vachhar
      <Audio ref={nameAudioRef} src="/varun.mp3" />
      <PronunciationButton
        fontSize="inherit"
        fontWeight="inherit"
        aria-label="pronunciation"
        ml={1}
        onClick={() => {
          if (nameAudioRef.current) {
            nameAudioRef.current.play();
          }
        }}
      >
        <StyledIcon
          role="img"
          type="speaker"
          borderRadius="circle"
          color="neutral.7"
          bg="neutral.4"
          fontSize={2}
          p="2px"
          width="10px"
          height="10px"
        />
      </PronunciationButton>
    </PronunciationContainer>
  );
};
