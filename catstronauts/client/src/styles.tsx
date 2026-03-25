import '@apollo/space-kit/reset.css';

import { Button as SKButton } from '@apollo/space-kit/Button';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { ApolloIcon as SKApolloIcon } from '@apollo/space-kit/icons/ApolloIcon';
import { IconArrowRight as SKIconArrowRight } from '@apollo/space-kit/icons/IconArrowRight';
import { IconBook as SKIconBook } from '@apollo/space-kit/icons/IconBook';
import { IconDoubleArrowRight as SKIconDoubleArrowRight } from '@apollo/space-kit/icons/IconDoubleArrowRight';
import { IconRun as SKIconRun } from '@apollo/space-kit/icons/IconRun';
import { IconTime as SKIconTime } from '@apollo/space-kit/icons/IconTime';
import { IconView as SKIconView } from '@apollo/space-kit/icons/IconView';
import { IconYoutube as SKIconYoutube } from '@apollo/space-kit/icons/IconYoutube';
import { Global } from '@emotion/react';
import type { ComponentType, ReactNode } from 'react';

type SpaceKitIconProps = {
  height?: string;
  weight?: 'thin' | 'regular' | 'bold';
  width?: string;
};

type SpaceKitButtonProps = {
  children: ReactNode;
  color?: string;
  icon?: ReactNode;
  size?: 'small' | 'large' | 'default';
};

const ButtonBase = SKButton as unknown as ComponentType<SpaceKitButtonProps>;
const ApolloIconBase =
  SKApolloIcon as unknown as ComponentType<SpaceKitIconProps>;
const IconArrowRightBase =
  SKIconArrowRight as unknown as ComponentType<SpaceKitIconProps>;
const IconBookBase = SKIconBook as unknown as ComponentType<SpaceKitIconProps>;
const IconDoubleArrowRightBase =
  SKIconDoubleArrowRight as unknown as ComponentType<SpaceKitIconProps>;
const IconRunBase = SKIconRun as unknown as ComponentType<SpaceKitIconProps>;
const IconTimeBase = SKIconTime as unknown as ComponentType<SpaceKitIconProps>;
const IconViewBase = SKIconView as unknown as ComponentType<SpaceKitIconProps>;
const IconYoutubeBase =
  SKIconYoutube as unknown as ComponentType<SpaceKitIconProps>;

const breakpoints = [480, 768, 992, 1200] as const;
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;

export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
} as const;

export const colors = {
  primary: SKColors.indigo.base,
  secondary: SKColors.teal.base,
  accent: SKColors.pink.base,
  background: SKColors.silver.light,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,
  ...SKColors,
};

export function GlobalStyles() {
  return (
    <Global
      styles={{
        'html, body': {
          height: '100%',
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "'Source Sans Pro', sans-serif",
          backgroundColor: colors.background,
          color: colors.text,
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          backgroundImage: 'url("/space_kitty_pattern.png")',
        },
        '*': {
          boxSizing: 'border-box',
        },
        'h1, h2, h3, h4, h5, h6': {
          margin: 0,
          fontWeight: 600,
        },
        h1: {
          fontSize: 40,
          lineHeight: 1,
        },
        h2: {
          fontSize: 36,
        },
        h3: {
          fontSize: 30,
        },
        h5: {
          fontSize: 16,
          textTransform: 'uppercase',
          letterSpacing: 4,
        },
      }}
    />
  );
}

export function Button(props: SpaceKitButtonProps) {
  return <ButtonBase {...props} />;
}

export function ApolloIcon(props: SpaceKitIconProps) {
  return <ApolloIconBase {...props} />;
}

export function IconArrowRight(props: SpaceKitIconProps) {
  return <IconArrowRightBase {...props} />;
}

export function IconBook(props: SpaceKitIconProps) {
  return <IconBookBase {...props} />;
}

export function IconDoubleArrowRight(props: SpaceKitIconProps) {
  return <IconDoubleArrowRightBase {...props} />;
}

export function IconRun(props: SpaceKitIconProps) {
  return <IconRunBase {...props} />;
}

export function IconTime(props: SpaceKitIconProps) {
  return <IconTimeBase {...props} />;
}

export function IconView(props: SpaceKitIconProps) {
  return <IconViewBase {...props} />;
}

export function IconYoutube(props: SpaceKitIconProps) {
  return <IconYoutubeBase {...props} />;
}
