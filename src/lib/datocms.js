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
      youtubeText
      ticketsInformationText
      podcastTitle
      playlistTitle
      myFestigalWebsiteText
      lastNewsTitle
      lastNewsText
      id
      gamesTitle
      gamesText
      festigalYoutubeText
      festigalStorText
      festigalSongWriter
      festigalSongSinger
      festigalSongName
      festigalSong
      comingSoonText
      video {
        url
        width
        title
        height
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
      icon {
        url
        width
        title
        id
        height
        alt
      }
      isDisplaySharePanel
      isDisplayShortPanel
    }
  }
  `;

  const data = await request({
    query,
  });

  return data?.allSocialMediaIcons;
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
      question
      answer
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

export async function getNews() {
  const query = `query ticker {
    ticker {
      text
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
      details
      description
      text
      video {
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
      imageSmall {
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
      link
      isDisplayUp
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

  return data?.allGames;
}

export async function getAllLastNews() {
  const query = `query allLastNews {
    allLastNews(filter: {isDisplay: {eq: "true"}}) {
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
