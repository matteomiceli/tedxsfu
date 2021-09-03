export function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

let cachedImages = {};
export function preloadImage(url, error) {
  const img = document.createElement("img");
  img.src = url;

  // use the cached image if its already loaded
  if (cachedImages[url]) return new Promise((resolve) => resolve(url));

  return new Promise((resolve, reject) => {
    img.onload = function (e) {
      cachedImages[url] = true;
      resolve(url);
    };
    img.onerror = function (e) {
      reject(`Unable to load image "${url}"`);
      error && error(e);
    };
  });
}

export async function preloadImageAll(...urls) {
  await Promise.all(
    urls.map(async (url) => {
      try {
        await preloadImage(url);
      } catch (err) {
        console.warn(err);
      }
    })
  );
}
