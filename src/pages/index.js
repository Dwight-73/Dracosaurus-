import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          MANUAL DE INSPECTOR DE ELEMENTOS
        </Heading>
        <p className="hero__subtitle">
          Aprende a usar el inspector del navegador como un experto.
        </p>
        <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center' }}>
          <Link className="button button--secondary button--lg" to="/docs/inspector">
            GO
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Manual práctico de Inspector de Elementos">
      <HomepageHeader />
      <main className="container">
        <section style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h2>¿Qué aprenderás?</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '4rem', // más espacio horizontal
              paddingTop: '2rem',
            }}>
            <div style={{ maxWidth: '320px', marginBottom: '3rem' }}>
              <img
                src="/img/gode.jpg"
                alt="Inspector de herramientas"
                style={{ width: '100%', borderRadius: '12px' }}
              />
              <p style={{ marginTop: '1rem' }}>
                Abre el inspector del navegador para explorar cómo está construida una página web.
              </p>
            </div>

            <div style={{ maxWidth: '320px', marginBottom: '3rem' }}>
              <img
                src="/img/google.jpeg"
                alt="Estructura HTML"
                style={{ width: '100%', borderRadius: '12px' }}
              />
              <p style={{ marginTop: '1rem' }}>
                Visualiza y edita la estructura HTML en tiempo real directamente desde el navegador.
              </p>
            </div>

            <div style={{ maxWidth: '320px', marginBottom: '3rem' }}>
              <img
                src="/img/monopolio.jpg"
                alt="Panel de estilos"
                style={{ width: '100%', borderRadius: '12px' }}
              />
              <p style={{ marginTop: '1rem' }}>
                Modifica estilos CSS al vuelo y observa los cambios instantáneamente ¡CON CUIDADO!.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
