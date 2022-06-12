import { Box, Flex } from '../layout';
import { Heading } from '../typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../theme';
import { css } from '@emotion/react';

const InfoBlock = ({
  title,
  icon,
  backgroundColor,
  children,
}: {
  title: string;
  //TODO: add the correct type here
  icon?: any;
  backgroundColor?: string;
  children?: React.ReactNode;
}) => (
  <Box p="10px" backgroundColor={backgroundColor} borderRadius="10px">
    <Flex flexDirection="row">
      {icon && (
        <>
          <Box
            mr="10px"
            overrideCss={css`
              @media ${theme.mediaQueries.mobileOnly} {
                display: none;
              }
            `}
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              color={theme.colors.orange}
            />
          </Box>
          <Box
            mt="7px"
            mr="10px"
            overrideCss={css`
              @media ${theme.mediaQueries.tabletUp} {
                display: none;
              }
            `}
          >
            <FontAwesomeIcon
              icon={icon}
              size="1x"
              color={theme.colors.orange}
            />
          </Box>
        </>
      )}
      <Heading variant="sub" fontSize="0.9rem">
        {title}
      </Heading>
    </Flex>
    {children}
  </Box>
);

export default InfoBlock;
