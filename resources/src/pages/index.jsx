import Profile from "../components/Profile";
import Table from "../components/Table";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div className="bg-primary-dark rounded-xl w-3/12 h-full m-5">
                        <Profile />
                    </div>
                    <div className="w-screen">
                        <Table />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
