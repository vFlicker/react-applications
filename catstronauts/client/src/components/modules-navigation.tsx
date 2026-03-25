import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors, IconArrowRight, IconDoubleArrowRight } from '~/styles';
import type { Module, Track } from '~/types/content';
import { humanReadableTimeFromSeconds } from '~/utils/helpers';

type ModulesNavigationProps = {
  module: Module;
  track: Track;
};

type ModuleListItemContentProps = {
  isActive: boolean;
};

const trackTitleHeight = 70;

export function ModulesNavigation({ module, track }: ModulesNavigationProps) {
  return (
    <ModulesNavContainer>
      <ModuleTitle>
        <h4>
          <Link to="../..">{track.title}</Link>
        </h4>
      </ModuleTitle>
      <ModulesList>
        {track.modules.map((navModule) => (
          <ModuleListItem key={`module_${navModule.id}`}>
            <div>
              <ModuleNavStyledLink
                to={`/track/${track.id}/module/${navModule.id}`}
              >
                <ModuleListItemContent isActive={navModule.id === module.id}>
                  {navModule.id === module.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight weight="thin" width="14px" />
                  )}
                  <div>{navModule.title}</div>
                  <div>{humanReadableTimeFromSeconds(navModule.length)}</div>
                </ModuleListItemContent>
              </ModuleNavStyledLink>
            </div>
          </ModuleListItem>
        ))}
      </ModulesList>
    </ModulesNavContainer>
  );
}

const ModulesNavContainer = styled.div({
  width: '33%',
  position: 'relative',
  marginLeft: 20,
  backgroundColor: colors.black.light,
  borderRadius: 4,
  border: `solid 1px ${colors.black.lighter}`,
  overflow: 'auto',
});

const ModuleTitle = styled.div({
  display: 'flex',
  position: 'sticky',
  fontSize: '1.6em',
  fontWeight: '400',
  height: trackTitleHeight,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: colors.pink.base,
  borderBottom: `solid 1px ${colors.pink.base}`,

  a: {
    textDecoration: 'none',
    color: colors.silver.base,
  },
  ':hover': {
    backgroundColor: colors.black.base,
  },
});

const ModulesList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  height: `calc(100% - ${trackTitleHeight}px)`,
});

const ModuleListItem = styled.li({
  borderBottom: `solid 1px ${colors.grey.darker}`,
  ':last-child': {
    borderBottom: 'none',
  },
});

const ModuleNavStyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const ModuleListItemContent = styled.div<ModuleListItemContentProps>(
  ({ isActive }) => ({
    backgroundColor: isActive ? colors.black.base : colors.black.light,
    color: isActive ? colors.silver.lighter : colors.silver.darker,
    minHeight: 80,
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.1em',
    flex: 1,
    ':hover': {
      backgroundColor: isActive ? colors.black.dark : colors.black.base,
      color: 'white',
    },
  }),
);
