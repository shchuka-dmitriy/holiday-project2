import { createImage } from '../../../utils';

/**
 *
 * @param {string} src
 * @param {string} reserveSrc
 * @param {string} alt
 * @param {Array<string>} className
 */
export default function (src, reserveSrc, alt, className) {
  const img = createImage( src, reserveSrc );
  img.setAttribute( 'alt', alt );
  img.classList.add( ...className );
  return img;
}
