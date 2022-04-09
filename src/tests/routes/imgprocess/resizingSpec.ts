//importing resizing function
import { info } from 'console';
import resizing from '../../../routes/imgprocess/resizing';

it('should resize horse image', async () => {
  await resizing('horse', 400, 400);
  expect(info).toBeTruthy;
  console.log(info);
});
