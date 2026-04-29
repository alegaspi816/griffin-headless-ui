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

export const GET_ALL_RESULTS = `
  query GetAllResults {
    results {
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