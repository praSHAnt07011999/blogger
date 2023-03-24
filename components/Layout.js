import Head from 'next/head';
import Link from 'next/link';
export const Layout = ({ title, children }) => {
  return (
    <>
      <div className="layout-container">
        <Head>
          <title>{title ? title : 'Blogger'}</title>
        </Head>
        <div className="navbar-container">
          <nav className="navbar">
            <span className="title">
              <Link href="/">Blogger</Link>
            </span>
            <div className="navbar-menu">
              <span className="navbar-item">
                <Link href="/explore">Explore</Link>
              </span>
              <span className="navbar-item">
                <Link href="/create">Create</Link>
              </span>
              <span className="navbar-item">
                <Link href="/login">Login</Link>
              </span>
            </div>
          </nav>
        </div>
        <main>{children}</main>
        <footer className="footer">
          <p>Copyright 2023 Blogger</p>
        </footer>
      </div>
    </>
  );
};
