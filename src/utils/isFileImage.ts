import { ImageMimeType } from '@/common/enum/image_mime_type.enum';

export default function isFileImage(file: Express.Multer.File) {
  return (Object.values(ImageMimeType) as string[]).includes(file.mimetype);
}
