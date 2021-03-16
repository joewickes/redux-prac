import React, { useEffect, useState } from 'react';

const Fc = () => {
  const [something, setSomething] = useState('b');

  useEffect(() => {
    console.log(something);
  })

  return (
    <>
      <div onClick={() => setSomething(something + 'a')}>{something}</div>
    </>
  );
}

export default Fc;