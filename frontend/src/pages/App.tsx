import { BaseLayout } from '../widget/base-layout/base-layout'
import * as i from './imports'

function App() {
  return (
    <div className="w-full h-screen bg-blue-100">
      <i.BrowserRouter>
        <BaseLayout>
          <i.Routes>
            <i.Route path={i.ROUTES.LOGIN} element={<i.Login />} />
            <i.Route path={i.ROUTES.MAIN} element={<i.Main />} />
          </i.Routes>
        </BaseLayout>
      </i.BrowserRouter>{' '}
    </div>
  )
}

export default App
