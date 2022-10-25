import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    // padding: '50px 0 25px',
  },
  link: {
    color: 'inherit',
    lineHeight: 1,
    // '&:not(:last-of-type)': {
    //   marginRight: '1.2rem',
    // },
  },
  icon: {
    display: 'inline-block',
    WebkitMaskSize: 'cover',
    maskSize: 'cover',
  },
}));

function SocialIcons(props) {
  const classes = useStyles();
  const { items, color, isUseOriginalSize = true, margin } = props;

  if (!items) {
    return <></>;
  }

  return (
    <Box className={classes.container}>
      {items
        .filter((i) => i.isDisplayShortPanel)
        .map((item, index) => (
          <a
            key={item.id ||index}
            href={item.link}
            target='_blank'
            rel='noreferrer'
            className={classes.link}>
            <Box
              sx={{
                margin: margin || '0 25px',
                width: `${isUseOriginalSize ? item.icon.width : item.iconWidth || item.icon.width}px`,
                height: `${isUseOriginalSize ? item.icon.height : item.iconHeight || item.icon.height}px`,
                backgroundColor: color || '#fff',
                WebkitMask: `url(${item.icon.url}) no-repeat 50% 50%`,
                mask: `url(${item.icon.url}) no-repeat 50% 50%`,
              }}
              className={classes.icon}></Box>
          </a>
        ))}
    </Box>
  );
}

export default SocialIcons;
