function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
  return false;
  }
  return arr1.every((value, index) => {
  console.log(value, arr2[index]);
  return value === arr2[index];
  });
}

function getUsersNamesInAgeRange(users, gender) {
  const filterUser = users.filter(user => user.gender === gender);
  if (filterUser.length === 0) {
  return 0;
  }
  const ageUser = filterUser.reduce((acc, user) => acc + user.age, 0);
  const averageAge = ageUser / filterUser.length;
  return averageAge;
}