/**
 * Search exercises and workouts
 * @param arr list of items to search through
 * @param query
 */
const searchExerciseOrWorkout = (arr, query) => {
  const filteredByEquipments = filterByEquipments(arr, query);
  const filteredByBodyParts = filterByBodyParts(arr, query);
  const filteredByTitle = filterByTitle(arr, query);
  return Array.from(
    new Set([
      ...filteredByEquipments,
      ...filteredByBodyParts,
      ...filteredByTitle,
    ]),
  );
};

/**
 * Filter by equipments
 * @param arr list of items to search through
 * @param query
 * @returns {unknown[]}
 */
const filterByEquipments = (arr, query) => {
  return arr.filter(item => {
    if (!item.equipments) {
      return false;
    }
    const lowerCaseEquipments = item.equipments.map(equipment =>
      equipment.toLowerCase(),
    );
    const matches = lowerCaseEquipments.filter(equipment => {
      if (equipment.indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
    return matches.length > 0;
  });
};

/**
 * Filter by body parts
 * @param arr list of items to search through
 * @param query
 * @returns {unknown[]}
 */
const filterByBodyParts = (arr, query) => {
  return arr.filter(item => {
    if (!item.equipments) {
      return false;
    }
    const lowerCaseBodyParts = item.bodyParts.map(part => part.toLowerCase());
    const matches = lowerCaseBodyParts.filter(part => {
      if (part.indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
    return matches.length > 0;
  });
};

/**
 * Filter by title
 * @param arr list of items to search through
 * @param query
 * @returns {unknown[]}
 */
const filterByTitle = (arr, query) => {
  return arr.filter(item => {
    if (!item.equipments) {
      return false;
    }
    const lowerCaseTitle = item.title.toLowerCase();
    return lowerCaseTitle.includes(query.toLowerCase());
  });
};

export {searchExerciseOrWorkout};
