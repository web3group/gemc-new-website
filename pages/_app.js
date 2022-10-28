import "../styles/globals.css";

export default function Application({ Component, pageProps }) {
  //* Use the layout defined at the page level, if available
  const getLayout = Component?.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
