import React from 'react';

import Total from 'components/Total';
import Loading from 'components/Loading';

// import { useAPI } from 'api';

export default function Summary() {
  // const [data, isLoading] = useAPI('/');
  const isLoading = false;
  const data = {
    confirmed: {
      value: 100
    },
    recovered: {
      value: 100
    },
    deaths: {
      value: 100
    },
  }

  return <Total data={data} />;
};
