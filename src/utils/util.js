export function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

const cachedImages = {};

//https://stackoverflow.com/questions/15352803/how-to-check-if-an-image-was-cached-in-js
export function isImageCached(img_url) {
  // support SSR
  if (typeof window === "undefined") return false;

  // Check 1 - check if we have loaded the image before
  if (cachedImages[img_url]) {
    return true;
  }
  // If the image haven't been loaded in the session,
  // see if it need time to load

  // const imgEle = document.createElement("img");
  // imgEle.src = img_url;
  // cachedImages[img_url] = true;
  // return imgEle.complete;
  return false;
}

export function preloadImage(url, error) {
  // use the cached image if its already loaded
  if (cachedImages[url]) return new Promise((resolve) => resolve(url));

  const img = document.createElement("img");
  img.src = url;

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

//https://www.davedrinks.coffee/how-do-i-use-two-react-refs/
export function mergeRefs(...refs) {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
}
