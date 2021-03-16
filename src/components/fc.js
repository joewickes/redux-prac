import React, { useState } from 'react';

const Fc = () => {
  const [something, setSomething] = useState('b');

  return (
    <>
      <div onClick={() => setSomething(something + 'a')}>{something}</div>
    </>
  );
}

export default Fc;