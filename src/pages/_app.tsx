
import '../styles/main.scss'

import MainPage from '../components/MainPage/MainPage'

function IndexPage() {
    return (
      <div className="dark dark:bg-black dark-mode">
        <p className="bg-blue-500 dark:bg-red-500">Settings</p>
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div  className="max-w-4xl mx-auto lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <MainPage />
          </div>
        </main>
      </div>
    );
  }
  
  export default IndexPage;