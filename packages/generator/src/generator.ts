import path from 'path';
import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';
import { logger } from '@prisma/internals';
import { genCustomLogic } from './helpers/genCustomLogic';
import { writeFileSafely } from './utils/writeFileSafely';
import { GENERATOR_NAME } from './constants';

const { version } = require('../package.json');

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}@${version} -> Registered`);

    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    };
  },
  onGenerate: async (options: GeneratorOptions) => {
    logger.info(`${GENERATOR_NAME}@${version} -> Generating`);

    // Replace the logic below with your own logic

    const results = genCustomLogic(options.dmmf);

    const writeLocation = path.join(
      options.generator.output?.value!,
      `generated_output.json`,
    );

    await writeFileSafely(writeLocation, JSON.stringify(results));

    logger.info(`${GENERATOR_NAME}@${version} -> Done`);
  },
});
