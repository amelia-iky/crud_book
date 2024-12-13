const Profile = () => {
    return (
        <div className="bg-white m-5 rounded-lg h-1/2">
            <div className="flex flex-col">
                <h1 className="text-center text-3xl m-5 py-3 border-b-2">
                    Profile
                </h1>
                <div className="justify-center items-center my-5">
                    <img
                        src="../../public/profile.jpg"
                        alt="profile"
                        className="rounded-full mx-auto w-3/4"
                    />
                </div>
                <div className="text-center">
                    <table className="w-full">
                        <tr className="border-b">
                            <td className="py-3 px-1">Amelia Rizky Yuniar</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-1">2315091020</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
