import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1.jsx'
import Level2 from './pages/Level2/Level2.jsx'
import Level3 from './pages/Level3/Level3.jsx'
import Level4 from './pages/Level4/Level4.jsx'
/*@1:遷移先ページが増えるごとにこの中にあるページも増え続ける*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*@1:下記の<Routes>内に以下のようなコードを書くことでconst navigate = useNavigate()を活用した際
      pathで指定した名前を活用してelementで指定したページに遷移することが出来るようになる*/}
      <Routes>
        {/*@1:下記のようにpathを"/"にセットすると、最初にアプリが起動した際に開かれる画面として
        セットされる。他のページからそのページに移動したい場合はnavigate("/")という処理を実行*/}
        <Route path="/" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)