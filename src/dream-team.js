const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!(members instanceof Array)) return false;

  arr = [];

  members.forEach(element => {
    if (typeof(element) == 'string') {
      
      first_name = element.trim().toUpperCase();
      console.log(first_name);

      arr.push(first_name.charAt(0));
    } 
  });

  arr.sort();
  team_name = '';

  arr.forEach(element => {
    team_name += element;
  });

  return team_name;
}

module.exports = {
  createDreamTeam
};
