import styled from '@emotion/styled';

import { ApolloIcon, colors } from '~/styles';

export function Footer() {
  return (
    <FooterContainer>
      {new Date().getFullYear()} ©{' '}
      <LogoContainer>
        <ApolloIcon height="40px" width="100px" />
      </LogoContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.pink.base,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.pink.light}`,
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});
