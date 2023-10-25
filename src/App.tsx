import LayoutPage from './components/layout';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#747aad',
            borderRadius: 2,
          },
        }}
      >
        <LayoutPage />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
