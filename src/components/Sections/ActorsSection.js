import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import ActorCarousel from '../Carousel/ActorCarousel';
import ActorDialog from '../ActorDialog';
import { ShareSocialButton } from '../ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
  },
  container: {
    background:
      'transparent url(./background/bg-2.png) 0% 0% repeat padding-box',
    padding: '5px 0 50px',
    '&.mobile': {
      padding: '5px 0 10px',
    },
  },
}));

function ActorsSection(props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const sectionId = 'actors';

  const classes = useStyles();
  const { items, socialIcons, isDesktopLayout } = props;

  if (!items) {
    return <></>;
  }

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const shareUrl = `${router.pathname}#${sectionId}`;
  const shareUrl = `${process.env.BASE_URL}#${sectionId}`;

  return (
    <Section id={sectionId} className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <ShareSocialButton
          sx={{
            position: 'relative',
            margin: '20px 0 0 20px',
          }}
          socialIcons={socialIcons}
          shareUrl={shareUrl}
          isDesktopLayout={isDesktopLayout}
        />
        <ActorCarousel
          items={items}
          handleItemClick={handleItemClick}
          isDesktopLayout={isDesktopLayout}
        />
      </Box>
      <ActorDialog
        open={open}
        onClose={handleClose}
        item={selectedItem}
        isDesktopLayout={isDesktopLayout}
      />
    </Section>
  );
}

export default ActorsSection;
