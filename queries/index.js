import { gql, imageFields, seoMetaTagsFields } from '~/lib/datocms'

export const HOME_PAGE_QUERY = gql`
  {
    site: _site {
      favicon: faviconMetaTags {
        ...seoMetaTagsFields
      }
    }
    homepage {
      socials {
        url
        label
      }
    }
    posts: allPosts(first: 10, orderBy: _firstPublishedAt_DESC) {
      id
      title
      slug
      publicationDate: _firstPublishedAt
      excerpt
      coverImage {
        responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
          ...imageFields
        }
      }
      author {
        name
        picture {
          responsiveImage(imgixParams: { fit: crop, ar: "1:1", w: 40 }) {
            ...imageFields
          }
        }
      }
    }
  }

  ${imageFields}
  ${seoMetaTagsFields}
`
