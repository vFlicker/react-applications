import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

import { colors, widths } from '~/styles';

export function ContentSection({ children }: PropsWithChildren) {
  return <ContentDiv>{children}</ContentDiv>;
}

const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWidth,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
