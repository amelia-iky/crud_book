const Profile = () => {
    return (
        <div className="bg-white m-5 rounded-lg">
            <div className="flex flex-col">
                <h1 className="text-center text-3xl m-5 py-3 border-b-2">
                    Profile
                </h1>
                <div className="mt-5">
                    <img
                        src="../src/assets/profile.jpg"
                        alt="profile"
                        className="rounded-full mx-auto w-3/4"
                    />
                </div>
                <div className="text-center mx-5 mt-7 mb-10">
                    <table className="w-full">
                        <tr className="border-b-2">
                            <td className="py-3 px-1">Amelia Rizky Yuniar</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="py-3 px-1">2315091020</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-1">kelas A</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
