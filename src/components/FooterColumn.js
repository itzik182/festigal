import React from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

function FooterColumn(props) {
  const { column, isDesktopLayout, sx } = props;

  return (
    <Box sx={sx}>
      {column.map((col) => {
        const { id, text, logo, logoSize, link, isBold } = col;
        const isBlank = link.includes('http');
        return (
          <Box
            key={id || `${colId}_${index}`}
            sx={{
              marginBottom: '15px',
              color: isBold && '#36D4DE',
              fontSize: isBold
                ? isDesktopLayout
                  ? '0.946vw'
                  : '18px'
                : '12px',
              fontWeight: isBold ? '400' : 'none',
            }}>
            <Link href={link}>
              <a
                target={isBlank ? '_blank' : '_self'}
                rel='noopener noreferrer'>
                {logo ? (
                  <img
                    src={logo.url}
                    title={logo.title}
                    alt={logo.alt}
                    style={{
                      width: logoSize,
                    }}
                  />
                ) : (
                  text
                )}
              </a>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default FooterColumn;
