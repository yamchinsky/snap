import { Helmet } from 'react-helmet';

const Home = () => {
    return (
    <>
        <Helmet>
            <title>Greeter Home | Greether</title>
            <meta name="title" content="Greeter Home | Greether" />
            <meta
            name="description"
            content="home"
            />
        </Helmet>
        <div>Home</div>
    </>
    );
};

export default Home;