

import {appRoutes} from './Routes/approutes'
import GenerateRoutes from './Components/GenerateRoutes'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow p-4 rounded-4xl border-black">
        <GenerateRoutes routes={appRoutes} />
      </div>
      
      <Footer />
    </div>
  );
}



export default App
