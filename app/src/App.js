import Header from './components/Header';
import Main from './components/Main';

import AuthProvider from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <div className='h-screen bg-slate-900 flex flex-col gap-8 p-8'>
        <Header />
        <Main className='flex flex-col flex-grow ' />
      </div>
    </AuthProvider>
  );
}

export default App;
