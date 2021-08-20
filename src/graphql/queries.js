import { gql } from '@apollo/client';
export const ALL_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
              id  
              fullName
              description
              language
              forksCount
              stargazersCount
              ratingAverage
              reviewCount
              ownerAvatarUrl
            }
        }
    }
}
`;