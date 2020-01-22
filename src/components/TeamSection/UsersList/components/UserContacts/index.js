import './styles.scss';
import createContact from '../../../../CommonComponents/ContactLink';

export default function (user) {
    const userContactsContainerElem = document.createElement("div");
    userContactsContainerElem.classList.add("userContactsContainer");
    userContactsContainerElem.append( createUserContactsElem(user) );
    return userContactsContainerElem;
}

function createUserContactsElem(user) {
    const userListItem = document.createElement("div");	
	const userContact = createContact( user.contacts, ['shareLinks', 'teamShareLinks']);
	userListItem.appendChild( userContact );
    return userListItem;
}