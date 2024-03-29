import { Route, Routes } from 'react-router-dom';
import { Layout } from './Global/Layout';
import Home from '@/Pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
