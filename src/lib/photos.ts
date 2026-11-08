import manifest from "../data/photos.json";

/** Public URL of the R2 bucket that holds the resized photos. */
export const PHOTO_BASE = "https://photos.overworld.space";

export interface Photo {
  /** Folder name in the bucket, e.g. "roll-12-frame-04-3f9a1c2b". */
  id: string;
  alt: string;
  caption?: string;
  /** Size of the largest uploaded version, used for aspect ratio. */
  width: number;
  height: number;
  /** Widths uploaded for this photo, each as .avif and .jpg. */
  widths: number[];
  takenAt?: string;
  camera?: string;
  lens?: string;
  film?: string;
  addedAt: string;
}

export const photos = manifest as Photo[];

export const photoUrl = (photo: Photo, width: number, ext: "avif" | "jpg") =>
  `${PHOTO_BASE}/${photo.id}/${width}.${ext}`;

export const srcset = (photo: Photo, ext: "avif" | "jpg") =>
  photo.widths.map((w) => `${photoUrl(photo, w, ext)} ${w}w`).join(", ");

export const largest = (photo: Photo) => Math.max(...photo.widths);
