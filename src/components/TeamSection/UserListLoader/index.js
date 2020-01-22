import { loadJSON } from '../../../utils';
import createUserCardElem from '../UsersList';

loadJSON( '/data/employees.json' )
    .then( appendUsersToList )
    .catch(console.error);

function appendUsersToList (users) {
    const usersListElem = document.getElementById('rowUsersContainer');
    users.forEach(
        user => {
            usersListElem.appendChild( createUserCardElem(user) )
        }
    )
}