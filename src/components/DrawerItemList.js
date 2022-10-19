// import { useRouter } from 'next/router';
// import { useAppState } from '../../Providers/app-state.provider';
import List from '@mui/material/List';
// import Image from 'next/image';
import Link from 'next/link';
// import Divider from '@mui/material/Divider';
import { MenuItem } from './MenuItem';
// import { TalentMenuItem } from './TalentMenuItem';
// import { useMediaQuery } from 'react-responsive';
// import { toggleMobileDrawer } from '../../utils/Tools';
// import {
//   TOP_SIDE_LINKS,
//   BOTTOM_SIDE_LINKS,
// } from '../../constants/menu.constants';

export const DrawerItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick } = props;
  // const router = useRouter();
  // const { setAppState, appState } = useAppState();
  // const isMobile = useMediaQuery({ maxWidth: 979 });

  // const handleItemClick = (item) => {
  //   const { isBlank, ref } = item || {};
  //   isMobile &&
  //     !isBlank &&
  //     toggleMobileDrawer(setAppState, appState, isDrawerOpen);
  //   isBlank ? window.open(ref, '_blank') : router.push(ref);
  // };

  return (
    <>
    <List
        sx={{
          marginRight: '5px',
          paddingTop: '0',
        }}>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
      </List>
    </>
  )

  // return (
  //   <>
  //     <List
  //       sx={{
  //         marginRight: '5px',
  //         marginTop,
  //         paddingTop: '0',
  //       }}>
  //       {TOP_SIDE_LINKS.map((item) => (
  //         <MenuItem
  //           highlight={item.title === 'חינם ביוקיד' ? true : false}
  //           key={item.title}
  //           item={item}
  //           handleItemClick={handleItemClick}
  //           isDrawerOpen={isDrawerOpen}
  //         />
  //       ))}
  //     </List>
  //     {isDrawerOpen && (
  //       <TalentMenuItem
  //         isDrawerOpen={isDrawerOpen}
  //         sx={{
  //           marginRight: '5px',
  //         }}
  //       />
  //     )}
  //     <Divider
  //       sx={{
  //         background: '#e7f5ff',
  //         opacity: '0.2',
  //         margin: '0px 10px',
  //       }}
  //     />
  //     <List
  //       sx={{
  //         marginRight: '5px',
  //         marginTop: '8px',
  //         paddingTop: '0',
  //       }}>
  //       {BOTTOM_SIDE_LINKS.map((item) => (
  //         <MenuItem
  //           key={item.title}
  //           item={item}
  //           handleItemClick={handleItemClick}
  //           isDrawerOpen={isDrawerOpen}
  //         />
  //       ))}
  //     </List>
  //     <Divider
  //       sx={{
  //         background: '#e7f5ff',
  //         opacity: '0.2',
  //         margin: '0px 10px',
  //       }}
  //     />
  //     <List
  //       sx={{
  //         paddingTop: '20px0',
  //         textAlign: 'center',
  //       }}>
  //       <a target='_blank' href='https://acum.org.il/'>
  //         <img
  //           src='/logo/a_logo.png'
  //           alt='Acum'
  //           style={{
  //             width: isDrawerOpen ? '70px' : '30px',
  //             height: isDrawerOpen ? '70px' : '30px',
  //           }}
  //         />
  //       </a>
  //     </List>
  //   </>
  // );
};
