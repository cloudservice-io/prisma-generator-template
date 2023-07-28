import path from 'path';
import { getDMMF, getSchema } from '@prisma/internals';

export const getSampleDMMF = async () => {
  const samplePrismaSchema = await getSchema(
    path.join(__dirname, './sample.prisma'),
  );
  return getDMMF({
    datamodel: samplePrismaSchema,
  });
};
