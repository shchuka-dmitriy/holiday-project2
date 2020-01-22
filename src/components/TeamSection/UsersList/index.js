import './styles.scss';
import createPicture from '../../CommonComponents/Picture';
import createContacts from './components/UserContacts';

export default function (user) {
    const userListItem = createUserListItemElem(user);
    userListItem.appendChild( createUserImageElem(user) );
    userListItem.appendChild( createUserContentElem(user) );
    userListItem.appendChild( createUserContactsContainer(user) );
    return userListItem;
}

function createUserListItemElem(user) {
    const userListItem = document.createElement( 'div' );
    userListItem.setAttribute( 'id', user.id);
    userListItem.classList.add('userCard');
    return userListItem;
}

function createUserImageElem(user) {
    const userImageContainer = document.createElement('div');
	const userPicture = createPicture(user.profilePicture, 'https://chapters.theiia.org/tallahassee/About/ChapterOfficers/z_Not_Avail.png', 'profile picture', [] );
    userImageContainer.appendChild(userPicture);
    return  userImageContainer;
}

function createUserContentElem(user) {
    const userContentElem = document.createElement('div');
    userContentElem.classList.add('userContent');
    userContentElem.appendChild(createUserNameElem(user));
    userContentElem.appendChild(createUserDescriptionElem(user));
    return userContentElem;
}

function createUserNameElem(user) {
    const userNameElem = document.createElement('h4');
    userNameElem.classList.add('userName');
    userNameElem.innerText = user.name;
    return userNameElem;
}

function createUserDescriptionElem({resume}) {
    const userDescriptionElem = document.createElement('p');
    userDescriptionElem.classList.add('userDescription');
    userDescriptionElem.innerText = `${resume}`;
    return userDescriptionElem;
}

function createUserContactsContainer(user) {
    const userContactsContainerElem = document.createElement("div");
    const userContactsContainer = createContacts(user);
	userContactsContainerElem.classList.add("userContactsContainer");
    userContactsContainerElem.appendChild( userContactsContainer );
    return userContactsContainerElem;
}