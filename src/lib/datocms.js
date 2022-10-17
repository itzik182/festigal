import { GraphQLClient } from "graphql-request";
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
    query: Site_QUERY
  });

  return data?.allArtists;
}

export async function getArtistsByCategory(category) {
  const Artists_QUERY = `query Artists($limit: IntType) {
    ${category}(first: $limit, filter: {isdisplay: {eq: "true"}}) {
      id
      name(locale: he)
      details(locale: he)
      pictureThumbnail {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      },
      pictureBig {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      }
    }
  }`;

  const data = await request({
    query: Artists_QUERY,
    variables: { limit: 100 },
  });

  return data && data[`${category}`];
}

// export async function getArtistsByCategory(categoryId) {
//   const Artists_QUERY = `query Artists($limit: IntType) {
//     allArtists(first: $limit, filter: {category: {allIn: ${categoryId}}, isdisplay: {eq: "true"}}) {
//       id
//       name(locale: he)
//       details(locale: he)
//       pictureThumbnail {
//         url
//         width
//         id
//         height
//         alt(locale: he)
//         title(locale: he)
//         customData(locale: he)
//       },
//       pictureBig {
//         url
//         width
//         id
//         height
//         alt(locale: he)
//         title(locale: he)
//         customData(locale: he)
//       }
//     }
//   }`;

//   const data = await request({
//     query: Artists_QUERY,
//     variables: { limit: 100 },
//   });

//   return data?.allArtists;
// }

export async function getArtists() {
  const allArtistMusics = await getArtistsByCategory("allArtistMusics");
  const allArtistYouths = await getArtistsByCategory("allArtistYouths");
  const allArtistKids = await getArtistsByCategory("allArtistKids");
  const allArtist = allArtistMusics.concat(allArtistYouths, allArtistKids); 

  return allArtist;
}

// export async function getArtists() {
//   const Artists_QUERY = `query Artists($limit: IntType) {
//     allArtists(first: $limit, filter: {isdisplay: {eq: "true"}}) {
//       id
//       name(locale: he)
//       details(locale: he)
//       pictureThumbnail {
//         url
//         width
//         id
//         height
//         alt(locale: he)
//         title(locale: he)
//         customData(locale: he)
//       },
//       pictureBig {
//         url
//         width
//         id
//         height
//         alt(locale: he)
//         title(locale: he)
//         customData(locale: he)
//       }
//     }
//   }`;

//   const data = await request({
//     query: Artists_QUERY,
//     variables: { limit: 100 },
//   });

//   return data?.allArtists;
// }

export async function getArtist(category, artistId) {
  //console.log('ArtistId ', ArtistId );
  const Artist_QUERY = `query Artist {
    ${category}(filter: {id: {in: ${artistId}}}) {
      id
      name(locale: he)
      details(locale: he)
      video1 {
        url,
        title,
      }
      video2 {
        url,
        title
      }
      instagramUrl
      youtubeUrl
      facebookUrl
      tiktokUrl
      fanlinkUrl
      pictureBig {
        height
        width
        url
        title(locale: he)
        alt(locale: he)
        customData(locale: he)
      }
      seo {
        title
        description
      }
    }
  }`;

  const data = await request({
    query: Artist_QUERY,
  });

  return data && data[`${category}`];
}

export async function getShows() {
  const Shows_QUERY = `query Shows($limit: IntType) {
    allShows(first: $limit, filter: {isdisplay: {eq: "true"}}) {
      id
      name(locale: he)
      details(locale: he)
      seo {
        title
        description
      }
      pictureThumbnail {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      },
      pictureBig {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      }
    }
  }`;

  const data = await request({
    query: Shows_QUERY,
    variables: { limit: 100 },
  });

  return data?.allShows;
}

export async function getLectures() {
  const Lectures_QUERY = `query Lectures($limit: IntType) {
    allLectures(first: $limit, filter: {isdisplay: {eq: "true"}}) {
      id
      name(locale: he)
      details(locale: he)
      seo {
        title
        description
      }
      pictureThumbnail {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      },
      pictureBig {
        url
        width
        id
        height
        alt(locale: he)
        title(locale: he)
        customData(locale: he)
      }
    }
  }`;

  const data = await request({
    query: Lectures_QUERY,
    variables: { limit: 100 },
  });

  return data?.allLectures;
}

export async function getMenuCategories() {
  const Menu_Categories_QUERY = `query MenuCategories {
    allMenuCategories(orderBy: order_ASC, filter: {isdisplay: {eq: "true"}}) {
      id
      name(locale: he)
      link
      seo {
        title
        description
      }
      icon {
        url
        width
        height
      }
      iconActive {
        url
        width
        height
      }
    }
  }`;

  const data = await request({
    query: Menu_Categories_QUERY,
  });

  return data?.allMenuCategories;
}

export async function getInformationPages() {
  const Information_Pages_QUERY = `query InformationPages {
    allInformationPages(orderBy: order_ASC, filter: {isdisplay: {eq: "true"}}) {
      id
      name(locale: he)
      displayInMenu
      link
      isclickable
      seo {
        title
        description
      }
    }
  }`;

  const data = await request({
    query: Information_Pages_QUERY,
  });

  return data?.allInformationPages;
}

export async function getInformationPage(id) {
  const Information_Page_QUERY = `query InformationPages {
    informationPage(filter: {id: {in: ${id}}}) {
      name(locale: he)
      link
      details(locale: he)
      displayInMenu
      id
      seo {
        title
        description
      }
      title
      picture {
        alt(locale: he)
        url
        title
        width
        height
        customData(locale: he)
      }
    }
  }`;

  const data = await request({
    query: Information_Page_QUERY,
  });

  return data?.informationPage;
}
