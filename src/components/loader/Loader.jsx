import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="100"
      width="100"
      color="#1B3668"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25px',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
