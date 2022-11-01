import { GraphQLClient } from 'graphql-request';
export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export async function getSiteParams() {
  const Site_QUERY = `query Site() {
    _site {
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
        titleSuffix
      }
    }
  }`;

  const data = await request({
    query: Site_QUERY,
  });

  return data?.allArtists;
}

export async function getMainData() {
  const query = `query mainText {
    mainText {
      id
      youtubeText
      isDisplayFlag
      ticketsInformationText
      ticketsInformationLink
      podcastTitle
      playlistTitle
      myFestigalWebsiteText
      lastNewsTitle
      lastNewsText
      gamesTitle
      gamesText
      festigalYoutubeText
      headerShopText
      headerShopLink
      shopFromPackageText
      festigalStorText
      festigalStorUnderItemText
      festigalSongWriter
      festigalSongSinger
      festigalSongName
      festigalSong
      comingSoonText
      videoBigText
      videoSmallText
      flagText
      firstShowDate
      flagButtonText
      showLink
      allNewsFlashLink
      allNewsFlashText
      allNewsFlashMissText
      allNewsFlashMenuText
      arrivalText
      mainVideo {
        url
        width
        title
        height
      }
      mainVideoMobile {
        url
        width
        title
        height
      }
      lastNewsImage {
        url
        width
        title
        id
        height
        alt
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.mainText;
}

export async function getTicketsInformationData() {
  const query = `query ticketsInformationText {
    ticketsInformationText {
      id
      informationTitle
      informationDescription
      faqTitle
      faqDescription
      ticketTitle
      ticketDescription
      accessibilityTitle
      accessibilityDescription
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.ticketsInformationText;
}

export async function getSocialIcons() {
  const query = `query allSocialMediaIcons {
    allSocialMediaIcons(filter: {isDisplay: {eq: "true"}}) {
      id
      name
      link
      iconWidth
      iconHeight
      iconWidthMobile
      iconHeightMobile
      icon {
        url
        width
        title
        id
        height
        alt
      }
      isDisplayShortPanel
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allSocialMediaIcons;
}

export async function getAllNewsFlashes() {
  const query = `query allNewsFlashes {
    allNewsFlashes(filter: {isDisplay: {eq: "true"}}) {
      id
      publisherName
      link
      description
      image {
        alt
        width
        url
        title
        height
      }
      publisherImage {
        alt
        width
        url
        title
        height
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allNewsFlashes;
}

export async function getAllShows() {
  const query = `query allShows {
    allShows(filter: {isDisplay: {eq: "true"}}) {
      id
      buyTicketLink
      locationLink
      date
      city
      auditorium
      isTicketsAvailable
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allShows;
}

export async function getAllFaqs() {
  const query = `query allFaqs {
    allFaqs(filter: {isDisplay: {eq: "true"}}) {
      id
      title
      content
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allFaqs;
}

export async function getAllFooters() {
  const query = `query allFooters {
    allFooters(filter: {isDisplay: {eq: "true"}}) {
      id
      text
      link
      isBold
      column {
        name
        id
        columnNumber
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allFooters;
}

export async function getMenuItems() {
  const query = `query allMenuItems {
    allMenuItems(filter: {isDisplay: {eq: "true"}}) {
      id
      text
      link
      image {
        alt
        width
        url
        title
        height
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allMenuItems;
}

export async function getNewsTicker() {
  const query = `query ticker {
    ticker {
      id
      text
      isDisplay
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.ticker;
}

export async function getAbout() {
  const query = `query about {
    about {
      id
      details
      description
      text
      video {
        url
        width
        title
        height
      }
      videoMobile {
        url
        width
        title
        height
      }
      image {
        alt
        width
        url
        title
        height
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.about;
}

export async function getAllActors() {
  const query = `query allActors {
    allActors(filter: {isDisplay: {eq: "true"}}) {
      id
      description
      name
      imageBig {
        alt
        url
        title
        height
        width
      }
      imageBigMobile {
        alt
        url
        title
        height
        width
      }
      imageSmall {
        alt
        url
        title
        width
        height
      }
      imageSmallMobile {
        alt
        url
        title
        width
        height
      }
    }
  }`;

  const data = await request({
    query,
  });

  return data?.allActors;
}

export async function getAllShops() {
  const query = `query allShops {
    allShops(filter: {isDisplay: {eq: "true"}}) {
      id
      name
      link
      isDisplayUp
      isFromPackage
      imageWeb {
        alt
        width
        url
        title
        height
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allShops;
}

export async function getAllGames() {
  const query = `query allGames {
    allGames(filter: {isDisplay: {eq: "true"}}) {
      id
      link
      imageText
      firstTitle
      firstName
      isDisplayMobile
      imageWeb {
        alt
        height
        width
        url
        title
      }
      imageMobile {
        alt
        height
        width
        url
        title
      }
    }
  }`;

  const data = await request({
    query,
  });

  return data?.allGames;
}

export async function getAllLastNews() {
  const query = `query allLastNews {
    allLastNews(filter: {isDisplay: {eq: "true"}}) {
      id
      link
      imageWeb {
        alt
        height
        width
        url
        title
      }
      imageMobile {
        alt
        height
        width
        url
        title
      }
    }
  }`;

  const data = await request({
    query,
  });

  return data?.allLastNews;
}

export async function getAllMusics() {
  const query = `query allMusics {
    allMusics(filter: {isDisplay: {eq: "true"}}) {
      id
      name
      link
      description
      isPlaylist
      imageWeb {
        alt
        height
        width
        url
        title
      }
    }
  }`;

  const data = await request({
    query,
  });

  return data?.allMusics;
}

export async function getMyBioPage() {
  const query = `query myBioPage {
    myBioPage {
      id
      text1
      text2
      videoText
      image1 {
        id
        alt
        height
        width
        url
        title
      }
      image2 {
        id
        alt
        height
        width
        url
        title
      }
      video {
        width
        url
        title
        height
      }
      videoMobile {
        width
        url
        title
        height
      }
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.myBioPage;
}

export async function getMyFriendsPage() {
  const query = `query myFriendsPage {
    myFriendsPage {
      id
      title
      descriptionBold
      description
      birthDate
      firstName
      lastName
      phone
      email
      city
      registerText
      registerLink
      gender
      genderFemale
      genderMale
      genderOther
      send
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.myFriendsPage;
}

export async function getContactPage() {
  const query = `query contactPage {
    contactPage {
      id
      title
      description
      firstName
      lastName
      email
      phone
      birthDate
      city
      send
      writeUsText
      details
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.contactPage;
}
