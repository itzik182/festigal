import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import ActorCarousel from '../Carousel/ActorCarousel';
import ActorDialog from '../ActorDialog';

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
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const classes = useStyles();
  const { items } = props;

  if (!items) {
    return <></>;
  }

  const handleItemClick = (item) => {
    // alert(item.name);
    setSelectedItem(item);
    setOpen(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section className={classes.section}>
      <Box className={classes.container}>
        <ActorCarousel items={items} handleItemClick={handleItemClick} />
      </Box>
      <ActorDialog
        open={open}
        onClose={handleClose}
        item={selectedItem}
      />
    </Section>
  );
}

export default ActorsSection;
