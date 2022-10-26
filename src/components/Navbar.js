import React, {useState, useEffect} from 'react';
// import Hidden from '@material-ui/core/Hidden';
// import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import YoutubeEmbed from '../components/YoutubeEmbed';
import {MenuDrawer} from './Drawer/MenuDrawer/MenuDrawer';
import {InformationDrawer} from './Drawer/InformationDrawer/InformationDrawer';
import {NewsFlashesDrawer} from './Drawer/NewsFlashesDrawer/NewsFlashesDrawer';
import HeaderBar from 'components/HeaderBar';
import FirstShowFlag from 'components/FirstShowFlag';
import VideoText from 'components/VideoText';
import Vimeo from '@u-wave/react-vimeo';
import {useWindowWidth} from '@react-hook/window-size';

// const useStyles = makeStyles((theme) => ({

// }));

function Navbar(props) {
    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
    const [informationDrawerOpen, setInformationDrawerOpen] = useState(false);
    const [newsFlashesDrawerOpen, setNewsFlashesDrawerOpen] = useState(false);
    const windowWidth = useWindowWidth();
    const isDesktopLayout = windowWidth >= 960;

    const {
        menuItems,
        newsFlashesItems,
        showsItems,
        faqItems,
        mainData,
        ticketsInformationData,
        socialIcons,
    } = props;

    const {
        mainVideo,
        mainVideoMobile,
        flagText,
        firstShowDate,
        flagButtonText,
        showLink,
        videoBigText,
        videoSmallText,
        ticketsInformationText,
        ticketsInformationLink,
        allNewsFlashText,
        allNewsFlashLink,
    } = mainData;

    const handleMenuDrawerItemClick = () => {
        setMenuDrawerOpen(false);
    };

    useEffect(() => {

    }, [isDesktopLayout])

    // const videoId = video?.url?.substring(video?.url.indexOf('=') + 1);

    return (
        <Section
            size='auto'
            sx={{
                // minHeight: '796px',
            }}>
            <Vimeo
                background
                video={isDesktopLayout ? mainVideo?.url : mainVideoMobile?.url}
                showTitle={false}
                loop
                controls
                autoplay
                playsInline
                height='796px'
                width={'100%'}
                // volume={1}
                // paused={false}
                // muted={false}
                // background={true}
                responsive
                style={{
                    margin: '0px auto',
                    position: 'relative',
                    // minHeight: '796px',
                    width: '100%',
                }}
            />
            <FirstShowFlag
                flagButtonText={flagButtonText}
                showLink={showLink}
                flagText={flagText}
                firstShowDate={firstShowDate}
            />
            <VideoText videoBigText={videoBigText} videoSmallText={videoSmallText}/>

            <HeaderBar
                isDesktopLayout={isDesktopLayout}
                socialIcons={socialIcons}
                ticketsInformationText={ticketsInformationText}
                setMenuDrawerOpen={setMenuDrawerOpen}
                setInformationDrawerOpen={setInformationDrawerOpen}
                setNewsFlashesDrawerOpen={setNewsFlashesDrawerOpen}
            />
            <MenuDrawer
                items={menuItems}
                handleItemClick={handleMenuDrawerItemClick}
                ticketsInformationText={ticketsInformationText}
                ticketsInformationLink={ticketsInformationLink}
                drawerOpen={menuDrawerOpen}
                setDrawerOpen={setMenuDrawerOpen}
            />
            <InformationDrawer
                ticketsInformationData={ticketsInformationData}
                showsItems={showsItems}
                faqItems={faqItems}
                ticketsInformationText={ticketsInformationText}
                drawerOpen={informationDrawerOpen}
                setDrawerOpen={setInformationDrawerOpen}
            />
            <NewsFlashesDrawer
                items={newsFlashesItems}
                allNewsFlashText={allNewsFlashText}
                allNewsFlashLink={allNewsFlashLink}
                drawerOpen={newsFlashesDrawerOpen}
                setDrawerOpen={setNewsFlashesDrawerOpen}
            />
        </Section>
    );
}

export default Navbar;
