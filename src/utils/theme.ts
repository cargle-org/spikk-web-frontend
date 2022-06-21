import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "22.5em", // 360
  sm: "30em", // 480
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "85.375em", // 1366
  "3xl": "90em", // 1440
  "4xl": "96em", // 1536
  "5xl": "120em", // 1920
});

export const theme = extendTheme({
  styles: {
    global: () => ({
        'html, body': {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 400
          },
    }),
  },
  breakpoints,
  fonts: {
    heading: '"Gilroy", sans-serif',
    body: '"Gilroy", sans-serif'
  },
  colors: {
    "spikk-header-bg" : "#0D0D26",
    "spikk-inner-header-bg" : "#17173F",
    "spikk-inner-page-bg" : "#030319",
    "spikk-box-bg" : "#0A0A26",
    "spikk-white": "#F5F4FF",
    "spikk-orange": "#FBA819",
    "spikk-text1": "#2D2E48",
    "spikk-red": "#E43F3C",
    "spikk-yellow": "#FFF59A",
    "spikk-dark-bg": "#030319",
    "spikk-white2": "#ECEAFF",
    "spikk-gray": "#8685A4",
    "spikk-light-gray": "#CCCBEC",
    "spikk-gold": "#B9B27F"
  },
  space: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    110: "30rem",
    115: "32rem",
    120: "35rem",
    121: "36rem",
    122: "37rem",
    123: "40rem",
    124: "42rem",
    125: "45rem",
    127: "48rem",
    129: "50rem",
    130: "55rem",
    135: "60rem",
    137: "65rem",
    140: "70rem",
    143: "72rem",
    145: "76rem",
    150: "80rem",
    155: "90rem",
  },
  shadows: {},
  sizes: {
    110: "28rem",
    112: "30rem",
    115: "32rem",
    120: "35rem",
    125: "38rem",
    126: "40rem",
    127: "42rem",
    128: "45rem",
    heroHeight: "47.5rem",
  },
});
