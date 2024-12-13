import Profile from "../components/Profile";
import Table from "../components/Table";

const Home = () => {
    return (
        <div className="h-screen justify-center items-center">
            <div className="flex flex-row justify-between h-full w-full">
                <div className="bg-primary-dark w-3/12">
                    <Profile />
                </div>
                <div className="w-full bg-primary-custom">
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
