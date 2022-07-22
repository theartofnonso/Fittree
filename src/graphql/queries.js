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
            workoutFits {
              items {
                id
                fitId
                workoutId
                fit {
                  id
                  creatorId
                  title
                  description
                  bodyParts
                  equipments
                  videoUrls
                  workoutFits {
                    items {
                      id
                      fitId
                      workoutId
                      repsOrTime
                      repsOrTimeValue
                      sets
                      index
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  type
                  createdAt
                  updatedAt
                  owner
                }
                repsOrTime
                repsOrTimeValue
                sets
                index
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            type
            isLive
            createdAt
            updatedAt
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
