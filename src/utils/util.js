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
