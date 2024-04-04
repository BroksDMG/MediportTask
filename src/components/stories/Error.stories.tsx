import Error from '../Error';

export default {
  title: 'Components/Error',
  component: Error,
};

export const Default = () => <Error message="Request failed with status code 400" />;