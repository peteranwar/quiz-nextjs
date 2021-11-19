import 'bootstrap/dist/css/bootstrap.min.css'
import {UserDataProvider} from '../context/UserDataState'
import '../components/scss/style.scss'
import Layout from '../components/Layout'
import { ScoreExamProvider } from '../context/ScoreExamState'
function MyApp({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <ScoreExamProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ScoreExamProvider>


    </UserDataProvider>
  )
}

export default MyApp
