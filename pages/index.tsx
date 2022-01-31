import React, { useEffect, useCallback, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = () => {

    const [portfolios, setPortfolios] = useState<Array<any>>([]);
    /* functions */
    const fetchPortfolio = useCallback(() => {
      axios
        .get('https://atest666.herokuapp.com/api/posts?populate=*')
        .then(response => {

          const data = response.data.data.map((data: any) => {return data.attributes;});
          setPortfolios(data);
          console.log(portfolios);
        })
        .catch(error => { console.log(error);});
    }, [portfolios]);

    /* effects */
    useEffect(() => { fetchPortfolio(); }, []);

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
              <h3>Hi, Im Luiz</h3>
              <p className='lead'>
                Im a web developer based in São Paulo, BR. I’m currently SR frontend developer at a local agency, Maac Tech.
                In my spare time I like working with a few select clients and building my own products on Kurupako
                <br />
                My most recent product is Kurutaco. It’s a simple, but powerful, calorie tracker app.
                <br />
                {/* You can usually find me on Twitter, but I'm occasionally on Product Hunt and Reddit as well. */}
              </p>
            </section>

            <section>
              <div>
                { portfolios && portfolios.map((portfolio: any) => (
                  <>
                      <br/>
                      <br/>
                      <br/>
                      <h3>RECENT POSTS</h3>
                      <div>
                        <h3 key={portfolio.title}>{portfolio.title} </h3>
                      </div>
                  </>
                ))}
              </div>
            </section>


          </div>

        </div>

      </section>


      {/* <section>
        <h2>Hi, I'm Luiz</h2>
        <p>I'm a .</p>


        <div className='d-flex'>
          <div
            className='d-flex shadow rounded align-items-end justify-content-center pb-3'
            style={{
              width: 350,
              height: 250,
            }}
          >
            <h3>Project Name</h3>
          </div>
        </div>
      </section>
 */}

{/*

      <br />
      <br />
      <br />
      <br />
      <br />



      <br />
      <br />
      <br />
      <br />
      <br />



      <br />
      <br />
      <br />
      <br />
      <br />


      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <h2>Projects</h2>
        <p>Here you can see some projects I've contributed.</p>


        <div className='d-flex'>
          <div
            className='d-flex shadow rounded align-items-end justify-content-center pb-3'
            style={{
              width: 350,
              height: 250,
            }}
          >
            <h3>Project Name</h3>
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <h2>Experience</h2>
        <p>
          I've worked with a lot of programing langs and my prefered are: typescript and python. Nowadays I spend most of my time write projects using tools like AdonisJs, ReactJs, ReactNative and so on..
        </p>
        <div>
          <h3>timeline</h3>

        </div>
      </section> */}

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

export default Home
