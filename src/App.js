import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Welcome = React.lazy(() => import('./pages/Welcome'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const MainHeader = React.lazy(() => import('./components/MainHeader'));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className='centered'>
            <p>Loading...</p>
          </div>
        }
      >
        <MainHeader />
        <main>
          <Routes>
            <Route path='/' element={<Navigate replace to='/welcome' />} />
            <Route path='/welcome/*' element={<Welcome />}>
              <Route path='new-user' element={<p>Welcome, new user!</p>} />
            </Route>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
