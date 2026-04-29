export const GET_ALL_TESTIMONIALS = `
  query GetAllTestimonials {
    testimonials {
      nodes {
        id
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;