import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import BuyTicketButton from 'components/BuyTicketButton';

export const ShowItem = (props) => {
    const {item, isDrawerOpen, isDesktopLayout, arrivalText} = props;
    const {
        auditorium,
        city,
        date,
        isTicketsAvailable,
        buyTicketLink,
        locationLink,
    } = item;

    // const isBlank = link.includes('http');

    return (
        <Box
            sx={{
                background:
                    'transparent linear-gradient(180deg, #9E7304 0%, #FFF2AF 29%, #F7E99B 87%, #C7851B 100%) 0% 0% no-repeat padding-box',
                boxShadow: '0px 10px 10px #00000029',
                textAlign: isDesktopLayout ? 'center' : 'right',
                color: '#000',
                borderRadius: '10px',
                padding: isDesktopLayout ? '15px 10px' : '13px 20px',
                margin: isDesktopLayout ? '0' : '0 0 10px',
                display: isDesktopLayout ? 'flex' : 'flex',
                flexDirection: isDesktopLayout ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isDesktopLayout ? 'space-between' : 'space-between',
                maxWidth: isDesktopLayout ? '212px' : 'auto',
            }}>
            <Box>
                <Box
                    sx={{
                        height: '80px',
                        fontSize: isDesktopLayout ? '20px' : '18px',
                    }}>
                    {date.replaceAll(',','\n')}
                </Box>
                <Box
                    sx={{
                        fontSize: isDesktopLayout ? '26px' : '20px',
                        fontWeight: 'bold',
                    }}>
                    {city}
                </Box>
                <Box
                    sx={{
                        fontSize: isDesktopLayout ? '19px' : '14px',
                    }}>
                    {auditorium}
                </Box>
            </Box>
            <Box sx={{
                minWidth: isDesktopLayout ? 'auto' : 'fit-content',
            }}>
                <Box
                    sx={{
                        margin: '10px 0',
                    }}>
                    <BuyTicketButton
                        link={buyTicketLink}
                        isTicketsAvailable={isTicketsAvailable}
                        isDesktopLayout={isDesktopLayout}
                    />
                </Box>
                <Box
                    sx={{
                        fontSize: isDesktopLayout ? '14px' : '10px',
                        color: '#A2711D',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        width: 'max-content',
                        margin: '0 auto',
                    }}>
                    <Link href={locationLink}>
                        <a target={'_blank'}>
                            <Box sx={{display: isDesktopLayout ? 'block' : 'inline'}}>
                                {arrivalText}{' '}
                            </Box>
                            <Box sx={{display: isDesktopLayout ? 'block' : 'inline'}}>ל{auditorium}</Box>
                        </a>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
