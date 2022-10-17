import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ReactPlayer from 'react-player';
import React from 'react';
import YouTube from '@u-wave/react-youtube';

export const YoutubeEmbed = (props) => {
  const { url, autoplay, width, height, containerStyle } = props;

  return (
      <Box
        elevation={3}
        sx={{
          width: '100%',
          zIndex: '1',
          ...containerStyle,
        }}>
        <YouTube
          video={url}
          autoplay={autoplay}
          width={width}
          height={height}
          showInfo={false}
          controls={false}
          showRelatedVideos={false}
          showCaptions={false}
          disableKeyboard={true}
        />
        {/* <ReactPlayer
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
          url={url}
          playing={true}
          loop={true}
          controls={false}
          light={true}
          autoplay={true}
          width='100%'
          height='100%'
          config={{
            youtube: {
              playerVars: { autoplay: true, }
            },
          }}
        /> */}
      </Box>
  );
};

export default YoutubeEmbed;
