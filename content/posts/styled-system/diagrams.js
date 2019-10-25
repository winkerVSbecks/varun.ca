import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text, SrOnly, SVG, Image } from '@ds';
import productCardImg1 from '../../assets/product-cards/product-card-1.png';
import productCardImg2 from '../../assets/product-cards/product-card-2.png';
import productCardImg3 from '../../assets/product-cards/product-card-3.png';
import productCardImg4 from '../../assets/product-cards/product-card-4.png';
import productCardImg5 from '../../assets/product-cards/product-card-5.png';
import productCardImg6 from '../../assets/product-cards/product-card-6.png';

const SystemComponentsOverview = () => (
  <Box as="figure" mx={0} mb={4} fontSize={2}>
    <Flex
      bg="neutral.0"
      p={3}
      flexWrap={['wrap', 'wrap', 'nowrap']}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flex="1" measure="narrow" mb={[4, 4, 0]} mr={[0, 4]}>
        <Text
          color="neutral.7"
          fontSize={2}
          fontWeight={7}
          mb={2}
          fontFamily="code"
        >
          system-components
        </Text>
        <Text color="neutral.7" fontSize={1} mb={0} fontFamily="code">
          simpler authoring experience to create design-system-driven React UI
          components
        </Text>
      </Box>
      <Box flex="1" measure="narrow">
        <Text
          py={2}
          px={3}
          bg="neutral.7"
          color="neutral.0"
          mb={3}
          fontSize={1}
          fontFamily="code"
        >
          Additional features such as default value for props & <b>is</b> prop
        </Text>
        <Box py={2} px={3} bg="neutral.7" mb={3}>
          <Text fontSize={2} fontWeight={7} mb={2} fontFamily="code">
            clean-tag & clean-element
          </Text>
          <Text color="neutral.0" mb={0} fontSize={1} fontFamily="code">
            removes styled-system props from the underlying DOM elements
          </Text>
        </Box>
        <Box py={2} px={3} bg="neutral.7" mb={3}>
          <Text fontSize={2} fontWeight={7} mb={2} fontFamily="code">
            styled-system
          </Text>
          <Text color="neutral.0" mb={0} fontSize={1} fontFamily="code">
            framework agnostic design system utilities
          </Text>
        </Box>
        <Box py={2} px={3} bg="neutral.7">
          <Text fontSize={2} fontWeight={7} mb={2} fontFamily="code">
            styled-components
          </Text>
          <Text color="neutral.0" mb={0} fontSize={1} fontFamily="code">
            a css-in-js library
          </Text>
        </Box>
      </Box>
    </Flex>

    <SrOnly as="figcaption">
      system-components is comprised of styled-components, styled-system,
      clean-tag and clean-element. It also gives us the ability to provide
      default values for props.
    </SrOnly>
  </Box>
);

const CurrencyInput = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    ariaLabelledby="CurrencyInputTitle CurrencyInputDesc"
    bg="white"
    mb={4}
    display="block"
    mx="auto"
    viewBox="0 0 800 192"
  >
    <title id="CurrencyInputTitle">Currency Input</title>
    <desc id="CurrencyInputDesc">
      An illustration of the currency input with an icon adornment
    </desc>
    <g fill="none" fillRule="evenodd">
      <rect
        width="738"
        height="98"
        x="31"
        y="47"
        stroke="#CCC"
        strokeWidth="2"
        rx="4"
      ></rect>
      <text
        fill="#333"
        fontFamily="AvenirNext-Bold, Avenir Next"
        fontSize="24"
        fontWeight="bold"
      >
        <tspan x="32" y="28">
          Currency
        </tspan>
      </text>
      <path
        fill="#333"
        fillRule="nonzero"
        d="M74.667 110.444c-5.578 0-10.4-3.155-12.8-7.777h12.8v-4.445H60.4A14.743 14.743 0 0160.222 96c0-.756.067-1.489.178-2.222h14.267v-4.445h-12.8c2.4-4.622 7.244-7.777 12.8-7.777a14.38 14.38 0 019.4 3.488L88 81.111A19.9 19.9 0 0074.667 76c-8.711 0-16.09 5.578-18.845 13.333H48v4.445h6.8A18.36 18.36 0 0054.667 96c0 .756.044 1.489.133 2.222H48v4.445h7.822C58.578 110.422 65.956 116 74.667 116c5.133 0 9.8-1.933 13.333-5.111l-3.956-3.933a14.234 14.234 0 01-9.377 3.488z"
      ></path>
    </g>
  </SVG>
);

const InputWithAdornment = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ariaLabelledby="InputWithAdornmentTitle InputWithAdornmentDesc"
    bg="white"
    mb={4}
    display="block"
    mx="auto"
    viewBox="0 0 800 192"
  >
    <title id="InputWithAdornmentTitle">Input With Adornment</title>
    <desc id="InputWithAdornmentDesc">
      An illustration of the Input With Adornment component layout
    </desc>

    <defs>
      <path id="a" d="M0 0h96v64H0z"></path>
      <path id="c" d="M0 0h96v64H0z"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path stroke="#333" strokeWidth="2" d="M31 47h738v98H31z"></path>
      <path stroke="#F90" strokeWidth="2" d="M159 63h482v66H159z"></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(96 136)"
      >
        <tspan x="56" y="42">
          Before Adornment Container
        </tspan>
      </text>
      <path
        stroke="#95A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M96 136v16l48 18"
      ></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(434 16)"
      >
        <tspan x="0" y="18">
          After Adornment Container
        </tspan>
      </text>
      <path
        stroke="#95A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M704 56V40l-48-10"
      ></path>
      <text
        fill="#F90"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
      >
        <tspan x="176" y="102">
          &lt;input /&gt;
        </tspan>
      </text>
      <text
        fill="#333"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
      >
        <tspan x="30" y="37">
          &lt;InputWithAdornment /&gt;
        </tspan>
      </text>
      <g transform="translate(48 64)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M1.5-10.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#b)"
        ></path>
      </g>
      <g transform="translate(656 64)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M1.5-10.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#d)"
        ></path>
      </g>
    </g>
  </SVG>
);

const ImageCard = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ariaLabelledby="ImageCardTitle ImageCardDesc"
    py={3}
    width={['100%', '75%']}
    display="block"
    mx="auto"
    bg="white"
    mb={4}
    viewBox="0 0 416 416"
  >
    <title id="ImageCardTitle">Image Card</title>
    <desc id="ImageCardDesc">
      An illustration of the Image Card component layout
    </desc>
    <defs>
      <path id="a" d="M0 0h96v64H0z"></path>
      <path id="c" d="M0 0h96v64H0z"></path>
      <path id="e" d="M0 0h96v64H0z"></path>
      <path id="g" d="M0 0h96v64H0z"></path>
      <path id="i" d="M0 0h96v64H0z"></path>
      <path id="k" d="M0 0h96v64H0z"></path>
      <path id="m" d="M0 0h96v64H0z"></path>
      <path id="o" d="M0 0h96v64H0z"></path>
      <path id="q" d="M0 0h96v64H0z"></path>
      <path id="s" d="M0 0h96v64H0z"></path>
      <path id="u" d="M0 0h96v64H0z"></path>
      <path id="w" d="M0 0h96v64H0z"></path>
      <path id="y" d="M0 0h96v64H0z"></path>
      <path id="A" d="M0 0h96v64H0z"></path>
      <path id="C" d="M0 0h96v64H0z"></path>
      <path id="E" d="M0 0h96v64H0z"></path>
      <path id="G" d="M0 0h96v64H0z"></path>
      <path id="I" d="M0 0h96v64H0z"></path>
      <path id="K" d="M0 0h96v64H0z"></path>
      <path id="M" d="M0 0h96v64H0z"></path>
      <path id="O" d="M0 0h96v64H0z"></path>
      <path id="Q" d="M0 0h96v64H0z"></path>
      <path id="S" d="M0 0h96v64H0z"></path>
      <path id="U" d="M0 0h96v64H0z"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path stroke="#333" strokeWidth="2" d="M31 31h354v354H31z"></path>
      <g transform="rotate(90 56 88)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#b)"
        ></path>
      </g>
      <g transform="rotate(90 16 128)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#d)"
        ></path>
      </g>
      <g transform="rotate(90 -8 104)">
        <mask id="f" fill="#fff">
          <use xlinkHref="#e"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#f)"
        ></path>
      </g>
      <g transform="rotate(90 32 64)">
        <mask id="h" fill="#fff">
          <use xlinkHref="#g"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#h)"
        ></path>
      </g>
      <g transform="rotate(90 48 160)">
        <mask id="j" fill="#fff">
          <use xlinkHref="#i"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#j)"
        ></path>
      </g>
      <g transform="rotate(90 88 120)">
        <mask id="l" fill="#fff">
          <use xlinkHref="#k"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#l)"
        ></path>
      </g>
      <g transform="translate(208 32)">
        <mask id="n" fill="#fff">
          <use xlinkHref="#m"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#n)"
        ></path>
      </g>
      <g transform="translate(208 96)">
        <mask id="p" fill="#fff">
          <use xlinkHref="#o"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#p)"
        ></path>
      </g>
      <g transform="translate(288 96)">
        <mask id="r" fill="#fff">
          <use xlinkHref="#q"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#r)"
        ></path>
      </g>
      <g transform="translate(288 144)">
        <mask id="t" fill="#fff">
          <use xlinkHref="#s"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#t)"
        ></path>
      </g>
      <g transform="translate(208 144)">
        <mask id="v" fill="#fff">
          <use xlinkHref="#u"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#v)"
        ></path>
      </g>
      <g transform="translate(288 32)">
        <mask id="x" fill="#fff">
          <use xlinkHref="#w"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#x)"
        ></path>
      </g>
      <g transform="rotate(90 88 296)">
        <mask id="z" fill="#fff">
          <use xlinkHref="#y"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#z)"
        ></path>
      </g>
      <g transform="rotate(90 56 264)">
        <mask id="B" fill="#fff">
          <use xlinkHref="#A"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#B)"
        ></path>
      </g>
      <g transform="rotate(90 16 304)">
        <mask id="D" fill="#fff">
          <use xlinkHref="#C"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#D)"
        ></path>
      </g>
      <g transform="rotate(90 -8 280)">
        <mask id="F" fill="#fff">
          <use xlinkHref="#E"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#F)"
        ></path>
      </g>
      <g transform="rotate(90 32 240)">
        <mask id="H" fill="#fff">
          <use xlinkHref="#G"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#H)"
        ></path>
      </g>
      <g transform="rotate(90 48 336)">
        <mask id="J" fill="#fff">
          <use xlinkHref="#I"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#J)"
        ></path>
      </g>
      <g transform="translate(32 208)">
        <mask id="L" fill="#fff">
          <use xlinkHref="#K"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#L)"
        ></path>
      </g>
      <g transform="translate(32 272)">
        <mask id="N" fill="#fff">
          <use xlinkHref="#M"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#N)"
        ></path>
      </g>
      <g transform="translate(112 272)">
        <mask id="P" fill="#fff">
          <use xlinkHref="#O"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#P)"
        ></path>
      </g>
      <g transform="translate(112 320)">
        <mask id="R" fill="#fff">
          <use xlinkHref="#Q"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#R)"
        ></path>
      </g>
      <g transform="translate(32 320)">
        <mask id="T" fill="#fff">
          <use xlinkHref="#S"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#T)"
        ></path>
      </g>
      <g transform="translate(112 208)">
        <mask id="V" fill="#fff">
          <use xlinkHref="#U"></use>
        </mask>
        <path
          stroke="#95A"
          strokeLinecap="square"
          d="M-34.5 25.5l73.335 73.335M-30.5 21.5l73.335 73.335M-26.5 17.5l73.335 73.335M-22.5 13.5l73.335 73.335M-18.5 9.5l73.335 73.335M-14.5 5.5l73.335 73.335M-10.5 1.5l73.335 73.335M-6.5-2.5l73.335 73.335M-2.5-6.5l73.335 73.335M2.5-9.5l73.335 73.335M15.5-4.5l73.335 73.335M19.5-8.5l73.335 73.335M33.5-2.5l73.335 73.335M37.5-6.5l73.335 73.335M41.5-10.5l73.335 73.335M45.5-14.5l73.335 73.335M49.5-18.5l73.335 73.335M53.5-22.5l73.335 73.335M57.5-26.5l73.335 73.335M61.5-30.5l73.335 73.335M65.5-34.5l73.335 73.335"
          mask="url(#V)"
        ></path>
      </g>
      <path stroke="#FFF" strokeWidth="8" d="M207 208h173v172H207z"></path>
      <path
        stroke="#FFF"
        strokeWidth="8"
        d="M36 208h173v172H36zM207 36h173v172H207z"
      ></path>
      <path stroke="#FFF" strokeWidth="8" d="M36 36h173v172H36z"></path>
      <path fill="#FFF" d="M76 100h88v56H76z"></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(76 100)"
      >
        <tspan x="10.266" y="23">
          Top Left
        </tspan>
        <tspan x="8.195" y="46">
          Container
        </tspan>
      </text>
      <path fill="#FFF" d="M252 100h88v56h-88z"></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(252 100)"
      >
        <tspan x="6.98" y="23">
          Top Right
        </tspan>
        <tspan x="8.195" y="46">
          Container
        </tspan>
      </text>
      <path fill="#FFF" d="M240 268h112v56H240z"></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(240 268)"
      >
        <tspan x="5.32" y="23">
          Bottom Right
        </tspan>
        <tspan x="19.695" y="46">
          Container
        </tspan>
      </text>
      <path fill="#FFF" d="M64 268h112v56H64z"></path>
      <text
        fill="#95A"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
        transform="translate(64 268)"
      >
        <tspan x="9.105" y="23">
          Bottom Left
        </tspan>
        <tspan x="20.195" y="46">
          Container
        </tspan>
      </text>
      <text
        fill="#333"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
      >
        <tspan x="32.484" y="19">
          &lt;ImageCard /&gt;
        </tspan>
      </text>
      <path stroke="#F90" strokeWidth="2" d="M39 39h338v338H39z"></path>
      <text
        fill="#F90"
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontSize="16"
        fontWeight="bold"
      >
        <tspan x="131" y="410">
          &lt;BackgroundImage /&gt;
        </tspan>
      </text>
      <path
        stroke="#F90"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M88 381v15l40 8"
      ></path>
    </g>
  </SVG>
);

const ProductImage = styled(Image)`
  width: 49% !important;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 30em) {
    width: 33% !important;
    margin-bottom: 0.25rem;
  }
`;

const ProductCards = props => (
  <Flex
    as="figure"
    mx={0}
    mb={4}
    flexWrap="wrap"
    alignItems="center"
    justifyContent="space-between"
    {...props}
  >
    <ProductImage src={productCardImg1} />
    <ProductImage src={productCardImg2} />
    <ProductImage src={productCardImg3} />
    <ProductImage src={productCardImg4} />
    <ProductImage src={productCardImg5} />
    <ProductImage src={productCardImg6} />
    <SrOnly as="figcaption">Product Cards </SrOnly>
  </Flex>
);

export default {
  SystemComponentsOverview,
  CurrencyInput,
  InputWithAdornment,
  ImageCard,
  ProductCards,
};
