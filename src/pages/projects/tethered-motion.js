import React from 'react';
import { Image, Box, Description, PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import tetheredMotion from '@assets/tethered-motion.gif';
import wave from '@assets/wave.gif';

const TetheredMotion = () => (
  <PageLayout title="Tethered Motion" pathname="/projects/tethered-motion">
    <PageHeader title="Tethered Motion">
      <Description>
        Tethered Motion is a giant wind-up toy that comes to life when
        participants turn a large metal crank. Once animated the flat wooden
        surface mimics a bird in flight.
      </Description>

      <Description mb={0}>
        Presented at the 2012 Scotiabank Nuit Blanche, Toronto.
      </Description>
    </PageHeader>

    <main>
      <Box mb={4} style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          title="Tethered Motion"
          src="https://player.vimeo.com/video/33856887?title=0&byline=0&portrait=0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </Box>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <Image width="100%" src={tetheredMotion} />
      <Image width="100%" src={wave} />
    </main>
  </PageLayout>
);

export default TetheredMotion;
