import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Router/>
        </div>
    </Suspense>
  </BrowserRouter>
);
