import { css } from '@emotion/react';
import theme from '../../theme';
import { Grid, Box, Flex } from '../layout';
import { Heading } from '../typography';
import { Image } from '../elements';

const AppIcon = require('../../assets/images/app-icon.png');

const Header = () => {
  return (
    <Flex
      px="10px"
      flexDirection="row"
      background={theme.colors.mainBackground}
      pt="20px"
    >
      <Grid gridTemplateColumns="1fr 3fr" gridColumnGap="10px" ml="20px">
        <Image
          source={AppIcon}
          alt="app icon"
          width="70px"
          boxShadow={theme.boxShadow}
          borderRadius="15%"
        />
        <Box>
          <Heading
            variant="main"
            color={theme.colors.orange}
            fontWeight={700}
            mt="5px"
          >
            On The House
          </Heading>
          <Heading
            variant="sub"
            color={theme.colors.lightGrey}
            fontSize="0.9rem"
          >
            Stellenbosch
          </Heading>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Header;
