import React from 'react';
import { Box, Image } from '@ds';
import { SourceCard } from '@components/source-card';
import lorenzAttractorGif from '../../assets/lorenz-attractor.gif';

export function LorenzAttractor() {
  return (
    <SourceCard
      name="Lorenz attractor by Dan Quinn"
      link="https://en.wikipedia.org/wiki/Lorenz_system#/media/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
    >
      <Box bg="#fff" py={4}>
        <Image
          mb={0}
          src={lorenzAttractorGif}
          alt="A sample trajectory through phase space is plotted near a Lorenz attractor"
        />
      </Box>
    </SourceCard>
  );
}
