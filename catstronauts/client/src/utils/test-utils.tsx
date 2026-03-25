import { render, type RenderOptions } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;

function BrowserRouterWrapper({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export const renderWithRouter = (
  node: ReactElement,
  options?: CustomRenderOptions,
) => {
  return render(node, {
    wrapper: BrowserRouterWrapper,
    ...options,
  });
};

export const renderApollo = (
  node: ReactElement,
  options?: CustomRenderOptions,
) => {
  return render(node, options);
};

export const renderApolloWithRouter = renderWithRouter;

export * from '@testing-library/react';
