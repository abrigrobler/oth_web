import theme from '../../theme';
import { Link } from '../elements';
import { Box, Flex, Section } from '../layout';
import { Text } from '../typography';

const Footer = () => (
  <Section background={theme.colors.mainBackground}>
    <Flex width="100%" justifyContent="flex-start" flexDirection="column">
      <Link
        href="https://pages.flycricket.io/on-the-house/privacy.html"
        fontSize="0.8rem"
        pt="10px"
        mb="5px"
      >
        App Privacy Policy
      </Link>
      <Link
        href="https://pages.flycricket.io/on-the-house/terms.html"
        fontSize="0.8rem"
      >
        App Terms and Conditions
      </Link>
      <Text>&copy; AF Grobler, 2022 -</Text>
    </Flex>
  </Section>
);

export default Footer;
