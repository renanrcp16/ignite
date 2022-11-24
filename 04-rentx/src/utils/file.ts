import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    return false;
  }

  await fs.promises.unlink(filename);
  return true;
};
