import { Header } from "@/header"
import "@/styles/globals.css"

const App = ({ Component, pageProps }) => (
  <main>
    <Header className="justify-between flex p-4 bg-green-400 text-white" />
    <section className="flex justify-center">
      <div className="max-w-md w-full p-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
)

export default App
