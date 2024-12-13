import Profile from "../components/Profile";
import Table from "../components/Table";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="bg-primary-custom flex flex-col h-full">
                <div className="flex flex-row justify-between">
                    <div className="bg-primary-dark w-3/12 h-4/5 rounded-xl ml-4 mt-3">
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
