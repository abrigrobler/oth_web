import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import theme from '../../theme';
import { Image, Link } from '../elements';
import { Box, Flex, Grid, Section } from '../layout';
import { Heading } from '../typography';

const mockups = require('../../assets/images/mockups.png');
const appStore = require('../../assets/images/app-store.png');
const googlePlay = require('../../assets/images/google-play.png');

const appStoreLinkAnim = css`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const [imagePosition, setImagePosition] = useState('-200px');
  const [textPosition, setTextPosition] = useState('-400px');
  useEffect(() => {
    setImagePosition('0px');
    setTextPosition('0px');
  }, []);
  return (
    <Section background={theme.colors.mainBackground}>
      <Flex
        justifyContent="center"
        flexDirection="column"
        px="20px"
        maxWidth="500px"
        ml={textPosition}
        overrideCss={css`
          @media ${theme.mediaQueries.desktopOnly} {
            transition: margin-left 2s ease-in;
          }
        `}
      >
        <Heading variant="hero">
          Stellenbosch food and drink specials app - support our local
          restaurants on a budget.
        </Heading>
        <Heading
          variant="main"
          color={theme.colors.darkerGrey}
          fontSize="0.8rem"
          mb="20px"
        >
          Use the download links below, get the app, and get that second pizza
          on the house!
        </Heading>
        <Flex
          justifyContent="space-evenly"
          width="100%"
          mb="20px"
          overrideCss={css`
            @media ${theme.mediaQueries.mobileOnly} {
              display: none;
            }
          `}
        >
          <Link
            href="https://apps.apple.com/us/app/on-the-house/id1619481891"
            mr="20px"
            overrideCss={appStoreLinkAnim}
          >
            <Image
              source={appStore}
              mr={imagePosition}
              alt="appStore"
              width="100%"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.abri_grobler.onthehouse"
            overrideCss={appStoreLinkAnim}
          >
            <Image
              source={googlePlay}
              mr={imagePosition}
              alt="googlePlay"
              width="100%"
            />
          </Link>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Image
          source={mockups}
          mr={imagePosition}
          alt="mockups"
          maxWidth="600px"
          overrideCss={css`
            transition: margin-right 2s ease-in;
            object-fit: contain;
            @media ${theme.mediaQueries.tabletOnly} {
              max-width: 400px;
              transition: none;
            }
            @media ${theme.mediaQueries.mobileOnly} {
              padding: 0;
              width: 80%;
            }
          `}
        />
      </Flex>
      <Flex
        justifyContent="space-evenly"
        px="20px"
        mt="20px"
        overrideCss={css`
          @media ${theme.mediaQueries.tabletUp} {
            display: none;
          }
        `}
      >
        <Link
          href="https://apps.apple.com/us/app/on-the-house/id1619481891"
          mr="20px"
        >
          <Image
            source={appStore}
            mr={imagePosition}
            alt="appStore"
            width="100%"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.abri_grobler.onthehouse">
          <Image
            source={googlePlay}
            mr={imagePosition}
            alt="googlePlay"
            width="100%"
          />
        </Link>
      </Flex>
    </Section>
  );
};

export default Hero;
