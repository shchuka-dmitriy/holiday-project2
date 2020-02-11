import { LINKS_ICON_MAP } from '../../../constants';

/**
 *
 * @param links
 * @param {Array<string>} className
 * @returns {HTMLUListElement}
 */
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