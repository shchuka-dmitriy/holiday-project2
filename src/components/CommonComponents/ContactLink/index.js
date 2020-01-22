import { LINKS_ICON_MAP } from '../../../constants';

export default function(links, className) {
  const listContainer = document.createElement('ul');
  links.forEach(link => {
    listContainer.appendChild(createLinkItem(link));
  });
  listContainer.classList.add(...className);
  return listContainer;
}

function createLinkItem (href) {
  const liWrapper = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', href);

  const icon = document.createElement('i');
  const {hostname} = new URL(href);
  if (LINKS_ICON_MAP.has(hostname)) {
    icon.classList.add(...LINKS_ICON_MAP.get(hostname));
  } else {
    icon.classList.add('fab', 'fa-unlink');
  }

  link.appendChild(icon);
  liWrapper.appendChild(link);

  return liWrapper;
}














/**
 *
 * @param {string} href
 * @param {Array<string>} className
 */
/* 
export default function (href, className) {
  const link = document.createElement( 'a' );
  link.setAttribute( 'href', href );
  link.classList.add( ...className );

  const icon = document.createElement( 'i' );
  const { hostname } = new URL( href );
  if (LINKS_ICON_MAP.has( hostname )) {
    icon.classList.add( ...LINKS_ICON_MAP.get( hostname ) );
  } else {
    icon.classList.add( 'fab', 'default' );
  }

  link.appendChild( icon );

  return link;
}*/