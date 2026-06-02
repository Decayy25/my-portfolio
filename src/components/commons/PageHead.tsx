import Head from "next/head";

interface PropsType {
  title?: string;
}

const PageHead = (props: PropsType) => {
  const { title = "Moch. Rizqi Hermawan | Web Developer" } = props;

  return (
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/images/general/icon.png" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;
