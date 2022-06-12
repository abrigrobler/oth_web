import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import theme from '../../theme';
import { Image, Link } from '../elements';
import InfoBlock from '../info-block';
import { Box, Flex, Grid, Section } from '../layout';
import { Heading, Text } from '../typography';
import {
  faCommentDots,
  faThumbsUp,
  faHandshake,
} from '@fortawesome/free-regular-svg-icons';

const instagram = require('../../assets/images/instagram.png');

const ContactUs = () => {
  return (
    <Section background="white" heading="Contact Us">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridRowGap="10px"
        width="100%"
        gridColumnGap="30px"
        overrideCss={css`
          @media ${theme.mediaQueries.mobileOnly} {
            grid-template-columns: auto;
          }
        `}
      >
        <InfoBlock title="Feedback and support" icon={faCommentDots}>
          <Text>
            For any feedback on our app, or if you'd like support directly from
            our developer, please send an email to the address below.
          </Text>
          <Link
            color={theme.colors.orange}
            fontFamily={'arial'}
            href="mailto:feedback@onthehouseapp.co.za"
            overrideCss={css`
              text-decoration: underline;
            `}
          >
            feedback@onthehouseapp.co.za
          </Link>
        </InfoBlock>
        <InfoBlock title="Advertise with us" icon={faHandshake}>
          <Text>
            Want to advertise your specials with our app? It's 100% free, and we
            handle most of the admin on our side. Get in touch using the email
            address below.
          </Text>
          <Link
            color={theme.colors.orange}
            fontFamily={'arial'}
            href="mailto:admin@onthehouseapp.co.za"
            overrideCss={css`
              text-decoration: underline;
            `}
          >
            admin@onthehouseapp.co.za
          </Link>
        </InfoBlock>
        <InfoBlock title="Social Media" icon={faThumbsUp}>
          <Link
            href="https://www.instagram.com/onthehouse_stellenbosch/"
            mt="20px"
          >
            <Image source={instagram} alt="Instagram" width="40%" />
          </Link>
        </InfoBlock>
      </Grid>
    </Section>
  );
};

export default ContactUs;
