import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luiz Ferreira | software developer based in Brazil. | Javascript, Typescript, Python</title>
        <meta name="description" content="Luiz Ferreira | software developer based in Brazil. | Javascript, Typescript, Python" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='container px-5 py-5 mt-5'>
        <div className='d-flex'>

          <div className='pe-5'>
            <Image src="/image.jpg" alt="" className='rounded-circle' width={200} height={200} />
          </div>

          <div className='pt-3'>
            <h2 className='title'>Luiz Ferreira</h2>
            <div className={styles.lineDecorator}></div>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <Link href={'/work'}>
                  WORK
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={'/projects'}>
                  PROJECTS
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={'/articles'}>
                  ARTICLES
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={'/contact'}>
                  CONTACT
                </Link>
              </li>
            </ul>

            <br />
            <br />
            <br />

            <section>
              <h3>Projects</h3>
              <br/>
              <div className='d-flex'>
                <Image src="/projects/postavagas.png" alt="" width={'500'} height={'300'} />
                <p className='lead ms-5'>
                  <strong>Posta Vagas</strong> (fullstack)
                  <br/>
                   <em>javascript, strapi headless cms, vuejs, nuxtjs</em>
                  <br/>
                  <br/>
                  You can usually find me on Twitter, but I'm occasionally on Product Hunt and Reddit as well.
                  <br/>
                  <br/>
                  <button className='btn btn-primary'>see projetc</button>
                </p>
              </div>
            </section>


          </div>

        </div>

      </section>

      <footer className='w-100 d-flex justify-content-center text-center px-3 fixed-bottom'>
        <p>
          Luiz Ferreira &copy; { new Date().getFullYear() } &nbsp; | &nbsp;
          <i className="bi bi-github"></i>&nbsp;&nbsp;
          <i className="bi bi-telegram"></i>&nbsp;&nbsp;
          <i className="bi bi-linkedin"></i>
        </p>
      </footer>

    </div>
  )
}

export default Projects
