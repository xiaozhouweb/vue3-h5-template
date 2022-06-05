export default function assetsImport(url:string) {
  return new URL(`/src/assets/${url}`, import.meta.url).href
}