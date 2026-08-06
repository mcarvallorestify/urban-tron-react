export const isVideoUrl = (url: string) =>
  /\.(mp4|mov|webm|ogg)(\?|$)/i.test(url) || url.includes('/video');

export type HomeMediaItem = {
  id: string;
  url: string;
  kind: 'video' | 'image';
  label: string;
};
