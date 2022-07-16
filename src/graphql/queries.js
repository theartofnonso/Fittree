/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreator = /* GraphQL */ `
  query GetCreator($id: ID!) {
    getCreator(id: $id) {
      id
      cognitoId
      username
      preferred_username
      profile
      fits {
        items {
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
                    fit {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      subscribers {
        items {
          id
          creatorID
          subscriberID
          creator {
            id
            cognitoId
            username
            preferred_username
            profile
            fits {
              items {
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
                    fit {
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
              nextToken
            }
            subscribers {
              items {
                id
                creatorID
                subscriberID
                creator {
                  id
                  cognitoId
                  username
                  preferred_username
                  profile
                  fits {
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
                  subscribers {
                    items {
                      id
                      creatorID
                      subscriberID
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
                      type
                      isLive
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  liveWorkouts {
                    items {
                      id
                      creatorId
                      createdAt
                      updatedAt
                      type
                      owner
                      liveWorkoutWorkoutId
                    }
                    nextToken
                  }
                  workoutPlans {
                    items {
                      id
                      creatorID
                      title
                      description
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
                subscriber {
                  id
                  cognitoId
                  username
                  preferred_username
                  profile
                  subscriptions {
                    items {
                      id
                      creatorID
                      subscriberID
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  workouts {
                    items {
                      id
                      workoutId
                      subscriberId
                      type
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
            liveWorkouts {
              items {
                id
                creatorId
                workout {
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
                workoutSubscriptions {
                  items {
                    id
                    workoutId
                    subscriberId
                    workout {
                      id
                      creatorId
                      createdAt
                      updatedAt
                      type
                      owner
                      liveWorkoutWorkoutId
                    }
                    type
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                type
                owner
                liveWorkoutWorkoutId
              }
              nextToken
            }
            workoutPlans {
              items {
                id
                creatorID
                title
                description
                workoutDays {
                  workoutId
                  dayOfWeek
                  isRestDay
                }
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
          subscriber {
            id
            cognitoId
            username
            preferred_username
            profile
            subscriptions {
              items {
                id
                creatorID
                subscriberID
                creator {
                  id
                  cognitoId
                  username
                  preferred_username
                  profile
                  fits {
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
                  subscribers {
                    items {
                      id
                      creatorID
                      subscriberID
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
                      type
                      isLive
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  liveWorkouts {
                    items {
                      id
                      creatorId
                      createdAt
                      updatedAt
                      type
                      owner
                      liveWorkoutWorkoutId
                    }
                    nextToken
                  }
                  workoutPlans {
                    items {
                      id
                      creatorID
                      title
                      description
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
                subscriber {
                  id
                  cognitoId
                  username
                  preferred_username
                  profile
                  subscriptions {
                    items {
                      id
                      creatorID
                      subscriberID
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  workouts {
                    items {
                      id
                      workoutId
                      subscriberId
                      type
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
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            workouts {
              items {
                id
                workoutId
                subscriberId
                workout {
                  id
                  creatorId
                  workout {
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
                      nextToken
                    }
                    type
                    isLive
                    createdAt
                    updatedAt
                    owner
                  }
                  workoutSubscriptions {
                    items {
                      id
                      workoutId
                      subscriberId
                      type
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  type
                  owner
                  liveWorkoutWorkoutId
                }
                type
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
                    fit {
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
      liveWorkouts {
        items {
          id
          creatorId
          workout {
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
          workoutSubscriptions {
            items {
              id
              workoutId
              subscriberId
              workout {
                id
                creatorId
                workout {
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
                workoutSubscriptions {
                  items {
                    id
                    workoutId
                    subscriberId
                    workout {
                      id
                      creatorId
                      createdAt
                      updatedAt
                      type
                      owner
                      liveWorkoutWorkoutId
                    }
                    type
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                type
                owner
                liveWorkoutWorkoutId
              }
              type
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          type
          owner
          liveWorkoutWorkoutId
        }
        nextToken
      }
      workoutPlans {
        items {
          id
          creatorID
          title
          description
          workoutDays {
            workoutId
            dayOfWeek
            isRestDay
          }
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
  }
`;
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
        liveWorkouts {
          items {
            id
            creatorId
            workout {
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
            createdAt
            updatedAt
            type
            owner
            liveWorkoutWorkoutId
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
