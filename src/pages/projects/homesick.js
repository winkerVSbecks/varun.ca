import React from 'react';
import { Text, Image, Box, Description, PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import tetheredMotion from '@assets/tethered-motion.gif';
import wave from '@assets/wave.gif';

const TetheredMotion = () => (
  <PageLayout title="Homesick">
    <PageHeader title="Homesick">
      <Description>
        An installation I built to overcome the loss of my childhood home in
        India. It had been recently sold, demolished and replaced by an
        apartment building.
      </Description>

      <Description mb={0}>
        16 metal hooks, steel cable, 4 turnbuckles, 84 sq.m. of cloth &amp;
        thread | 7.11m x 5.00m x 3.84m
      </Description>
    </PageHeader>

    <main>
      <Image src="assets/colours.png" />
      <Image src="assets/homesick1.png" />
      <Image src="assets/homesick2.png" />
      <Image src="assets/homesick3.png" />
      <Image src="assets/homesick4.png" />
      <Image src="assets/homesick5.png" />
      <Image src="assets/logo.png" />
    </main>
  </PageLayout>
);

export default TetheredMotion;
