import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Opps, something went wrong</h1>
    <p>try <Link href="/"><a>Going Back</a></Link></p>
  </div>
);

export default errorPage;
