import { css } from '@emotion/react';
import React from 'react';
import theme from '../../theme';
import { Heading } from '../typography';
import Box from './box';
import Flex from './flex';

const Section = ({
  background,
  heading,
  children,
}: {
  background: string;
  heading?: string;
  children: React.ReactNode;
}) => (
  <Box background={background}>
    {heading && (
      <Heading
        mt="20px"
        width="fit-content"
        ml="20px"
        color={theme.colors.darkGrey}
      >
        {heading}
      </Heading>
    )}
    <Flex
      p="30px"
      flexDirection="row"
      justifyContent="center"
      overrideCss={css`
        @media ${theme.mediaQueries.mobileOnly} {
          flex-direction: column;
          padding: 10px;
        }
      `}
    >
      {children}
    </Flex>
  </Box>
);

export default Section;
