import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { unit, widths } from '~/styles';

type LayoutProps = PropsWithChildren<{
  fullWidth?: boolean;
  grid?: boolean;
}>;

type PageContainerProps = Pick<LayoutProps, 'fullWidth' | 'grid'>;

export function Layout({ fullWidth, children, grid }: LayoutProps) {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
}

const PageContainer = styled.div<PageContainerProps>(({ fullWidth, grid }) => ({
  display: 'flex',
  justifyContent: grid ? 'center' : 'flex-start',
  flexDirection: grid ? 'row' : 'column',
  flexWrap: grid ? 'wrap' : 'nowrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: fullWidth ? undefined : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
