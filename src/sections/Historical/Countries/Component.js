import React from 'react';

import CheckList from 'components/CheckList';

// import { useAPI } from 'api';

export default function Countries(props) {
  // const [data, isLoading] = useAPI('/countries');
  const data = {
    countries: [],
  };
  const isLoading = false;

  return (
    <CheckList
      data={data ? data.countries : []}
      isLoading={isLoading}
      title="Countries"
      placeholder="choose countries..."
      {...props}
    />
  );
}
