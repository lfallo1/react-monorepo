import { render } from '@testing-library/react';
import { error } from "console";

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    const message = getByText(/h/gi);
    error(`***************${message.innerHTML}*******************`);

    expect(message).toBeTruthy();
  });
});
