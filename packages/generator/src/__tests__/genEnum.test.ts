import { getSampleDMMF } from './__fixtures__/getSampleDMMF';
import { genCustomLogic } from '../helpers/genCustomLogic';

test('check output', async () => {
  const sampleDMMF = await getSampleDMMF();

  expect(genCustomLogic(sampleDMMF)).toMatchSnapshot();
});
