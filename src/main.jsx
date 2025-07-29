import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'  // ここでindex.cssをインポート
import Level1 from './pages/Level1/Level1'
import Level2 from './pages/Level2/Level2'
import Level3 from './pages/Level3/Level3'
import Level4 from './pages/Level4/Level4'
import Level5 from './pages/Level5/Level5'
import Level6 from './pages/Level6/Level6'
import Level7 from './pages/Level7/Level7'
import Level8 from './pages/Level8/Level8'
import Level9 from './pages/Level9/Level9'
import Level10 from './pages/Level10/Level10'
import Level11 from './pages/Level11/Level11'
import Level12 from './pages/Level12/Level12'
import Level13 from './pages/Level13/Level13'
import Level14 from './pages/Level14/Level14'
/*@fix:自分も最初は勘違いしていたが、.jsxファイルの呼び出しでは拡張子は付けなくていいらしい*/
/*@1:遷移先ページが増えるごとにこの中にあるページも増え続ける*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*@1:下記の<Routes>内に以下のようなコードを書くことでconst navigate = useNavigate()を活用した際
      pathで指定した名前を活用してelementで指定したページに遷移することが出来るようになる*/}
      <Routes>
        {/*@1:下記のようにpathを"/"にセットすると、最初にアプリが起動した際に開かれる画面として
        セットされる。他のページからそのページに移動したい場合はnavigate("/")という処理を実行*/}
        <Route path="/" element={<Level8 />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
        <Route path="/level6" element={<Level6 />} />
        <Route path="/level7" element={<Level7 />} />
        <Route path="/level8" element={<Level8 />} />
        <Route path="/level9" element={<Level9 />} />
        <Route path="/level10" element={<Level10 />} />
        <Route path="/level11" element={<Level11 />} />
        <Route path="/level12" element={<Level12 />} />
        <Route path="/level13" element={<Level13 />} />
        <Route path="/level14" element={<Level14 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)