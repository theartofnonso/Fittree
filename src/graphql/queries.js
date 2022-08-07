export const listCreators = /* GraphQL */ `
  query ListCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        username
        preferred_username
        profile
        displayBrief
        displayProfile
        exercises {
          items {
            id
            creatorId
            title
            description
            bodyParts
            equipments
            videoUrls
            type
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        workouts {
          items {
            id
            creatorId
            preferred_username
            title
            description
            intensityLevel
            bodyParts
            equipments
            rounds
            roundsInterval
            exerciseInterval
            setsInterval
            thumbnailUrl
            workoutExercises
            type
            isLive
            duration
            createdAt
            updatedAt
            publishedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
