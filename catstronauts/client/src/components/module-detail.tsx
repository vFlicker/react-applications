import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

import { ContentSection } from '~/components/content-section';
import { Markdown } from '~/components/md-content';
import { ModulesNavigation } from '~/components/modules-navigation';
import { colors, widths } from '~/styles';
import type { Module, Track } from '~/types/content';
import { useWindowDimensions } from '~/utils/useWindowDimensions';

type ModuleDetailProps = {
  module: Module;
  track: Track;
};

type TopContainerProps = {
  totalWidth: number;
};

export function ModuleDetail({ track, module }: ModuleDetailProps) {
  const { videoUrl = '', title, content = '' } = module;
  const { width } = useWindowDimensions();

  return (
    <>
      <TopSection>
        <TopContainer totalWidth={width}>
          <PlayerContainer>
            <ReactPlayer height="100%" src={videoUrl} width="100%" />
          </PlayerContainer>
          <ModulesNavigation module={module} track={track} />
        </TopContainer>
      </TopSection>
      <ContentSection>
        <ModuleTitle>{title}</ModuleTitle>
        <Markdown content={content} />
      </ContentSection>
    </>
  );
}

const TopSection = styled.div({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colors.black.base,
  padding: 20,
  borderBottom: `solid 1px ${colors.pink.base}`,
});

const TopContainer = styled.div<TopContainerProps>(({ totalWidth }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  width: '100%',
  maxWidth: widths.largePageWidth,
  height: ((Math.max(totalWidth, 360) - 60) * (2 / 3)) / (16 / 9),
  maxHeight: (widths.largePageWidth * (2 / 3)) / (16 / 9),
}));

const PlayerContainer = styled.div({
  width: '66%',
});

const ModuleTitle = styled.h1({
  marginTop: 10,
  marginBottom: 30,
  paddingBottom: 10,
  color: colors.black.lighter,
  borderBottom: `solid 1px ${colors.pink.base}`,
});
