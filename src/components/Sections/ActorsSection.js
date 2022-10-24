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
  },
  container: {
    background:
      'transparent url(./background/bg-2.png) 0% 0% repeat padding-box',
    padding: '10px 0 30px',
  },
}));

function ActorsSection(props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const sectionId = 'actors';

  const classes = useStyles();
  const { items, socialIcons } = props;

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

  const shareUrl = `${router.pathname}#${sectionId}`;

  return (
    <Section id={sectionId} className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            textAlign: 'left',
            margin: '20px 0 0 20px',
          }}>
          <ShareSocialButton socialIcons={socialIcons} shareUrl={shareUrl} />
        </Box>
        <ActorCarousel items={items} handleItemClick={handleItemClick} />
      </Box>
      <ActorDialog open={open} onClose={handleClose} item={selectedItem} />
    </Section>
  );
}

export default ActorsSection;
