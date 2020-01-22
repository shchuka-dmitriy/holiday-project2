/**
 *
 * @param {string} url
 * @param {object?} options
 * @return {Promise<any>}
 */
export const loadJSON = async (url, options) => {
  try {
    const response = await fetch( url, options );
    return response.json();
  } catch (e) {
    console.error( e );
  }
};

export const createImage = (src, reserveSrc) => {
  const img = new Image();

  img.src = src;

  img.onerror = () => {
    if (img.src !== reserveSrc) {
      img.src = reserveSrc;
    }
  };

  return img;
};

export function appendById (id, child) {
  document.getElementById( id ).appendChild( child );
}
