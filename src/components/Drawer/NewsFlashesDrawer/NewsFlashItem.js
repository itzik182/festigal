import React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

export const NewsFlashItem = (props) => {
  const { item, isDrawerOpen } = props;
  const { publisherName, publisherImage, description, image, link } = item;
  const {
    url: publisherImageUrl,
    title: publisherImageTitle,
    alt: publisherImageAlt,
  } = publisherImage || {};
  const { url, title, alt } = image || {};

  const isBlank = link.includes('http');

  return (
    <ListItem
      button
      sx={{
        textAlign: 'center',
        margin: '0 0 34px !important',
      }}>
      <Link href={link}>
        <a
          target={isBlank ? '_blank' : '_self'}
          style={{
            textDecoration: 'none',
          }}>
          <Box
            sx={{
              background: '#fff 0% 0% no-repeat padding-box',
              borderRadius: '15px',
              color: '#000',
              fontFamily: 'Noto Sans Hebrew',
              padding: '4px 30px 15px',
              textAlign: 'right',
            }}>
              <Box sx={{
                  width: "50px", 
                  height: "50px", 
                  border: "3px solid #fff", 
                  borderRadius: '50px',
                  position: 'absolute',
                  top: "-8px", 
                  right: "-23px",
                  textAlign: 'center',
                  backgroundColor: publisherImageUrl ? '#fff' : '#021B23',
              }}>
                <img src={publisherImageUrl} style={{
                  height: 'auto',
                  width: '100%',
                }} />
              </Box>
            <Box
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '5px',
              }}>
              {publisherName}
            </Box>
            <Box>
              {image && (
                <img
                  src={url}
                  title={title}
                  alt={alt}
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                />
              )}
            </Box>
            <Box
              sx={{
                marginTop: '5px',
                fontSize: '15px',
              }}>
              {description}
            </Box>
          </Box>
        </a>
      </Link>
    </ListItem>
  );
};
