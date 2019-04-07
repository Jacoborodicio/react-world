import React from 'react';

const isolatedComponent = () => <div><p>I can live alone!</p></div>;

export const IsolatedComponent = React.memo(isolatedComponent);