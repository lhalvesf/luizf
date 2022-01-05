import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luiz Ferreira | software developer based in Brazil. | Javascript, Typescript, Python</title>
        <meta name="description" content="Luiz Ferreira | software developer based in Brazil. | Javascript, Typescript, Python" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='container mt-5 d-flex align-content-center justify-content-center'>
        <div className='mt-5 d-flex flex-column justify-content-center'>
          <h2 className='text-center mb-5'>Site em construção</h2>
          <iframe className="d-block float-center " src="https://giphy.com/embed/ule4vhcY1xEKQ" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>


      {/* navigation */}
      {/* <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom">
        <nav className="w-100 navbar navbar-dark bg-dark" aria-label="First navbar example">
          <Link href="/">
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <i className="bi bi-code"  ></i>
              <span className="fs-4">Luiz Ferreira</span>
            </a>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">about</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}

      {/* <footer className='w-100 d-flex justify-content-center text-center px-3'>
        <p>
          Luiz Ferreira &copy; { new Date().getFullYear() } &nbsp; | &nbsp;
          <i className="bi bi-github"></i>&nbsp;&nbsp;
          <i className="bi bi-telegram"></i>&nbsp;&nbsp;
          <i className="bi bi-linkedin"></i>
        </p>
      </footer> */}

    </div>
  )
}

export default Home
