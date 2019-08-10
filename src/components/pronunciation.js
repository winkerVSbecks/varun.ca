import React, { useEffect, useState } from 'react';
import { Icon, TransparentButton } from 'ds';

function useNameAudio() {
  const [nameAudio, setNameAudio] = useState(null);

  useEffect(() => {
    setNameAudio(
      new Audio('https://www.nameshouts.com/libs/media/varun_hi.mp3')
    );
  }, []);

  return nameAudio;
}

export const Pronunciation = () => {
  const nameAudio = useNameAudio();

  return (
    <TransparentButton
      fontSize="inherit"
      fontWeight="inherit"
      onClick={() => nameAudio.play()}
    >
      Varun Vachhar
      <Icon
        type="speaker"
        borderRadius="circle"
        color="white"
        bg="moon-gray"
        fontSize={2}
        ml={1}
        p="2px"
        width="10px"
        height="10px"
      />
    </TransparentButton>
  );
};
