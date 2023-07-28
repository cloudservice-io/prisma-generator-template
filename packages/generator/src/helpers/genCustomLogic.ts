import { DMMF } from '@prisma/generator-helper';

/**
 * This is an example function that you can use to generate custom logic.
 */
export const genCustomLogic = ({ mappings, datamodel }: DMMF.Document) => {
  const modelOperationsMap: {
    [key: string]: Partial<DMMF.ModelMapping>;
  } = {};

  for (const { model, ...operations } of mappings.modelOperations) {
    modelOperationsMap[model] = operations;
  }

  const { enums, models } = datamodel;

  const modelsMap: { [key: string]: Partial<DMMF.Field>[] } = {};

  for (const model of models) {
    modelsMap[model.name] = model.fields.map(({ name, type }) => ({
      name,
      type,
    }));
  }

  const enumsMap: { [key: string]: string[] } = {};

  for (const { name, values } of enums) {
    enumsMap[name] = values.map(({ name }) => name);
  }

  return {
    operations: modelOperationsMap,
    enums: enumsMap,
    models: modelsMap,
  };
};
