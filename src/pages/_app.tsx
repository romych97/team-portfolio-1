
import '../styles/main.scss'

import MainPage from '../components/MainPage/MainPage'
import TopMenu from '../components/TopMenu/TopMenu'

function IndexPage() {
    return (
      <div className="dark">

        {/* Switch theme example */}
        {/* <div className="bg-gray-900 dark:bg-gray-900 dark:text-gray-100">
          visible only on dark
        </div>
        <div className="bg-gray-900 dark:bg-gray-900 dark:text-gray-900 text-gray-100">
          visible only on light
        </div> */}

        <div className="dark:bg-gray-900 dark:text-gray-300 min-h-screen">
          <TopMenu />
          <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div  className="max-w-4xl mx-auto lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <MainPage />
            </div>
          </main>
        </div>
      </div>
    );
  }
  
  export default IndexPage;