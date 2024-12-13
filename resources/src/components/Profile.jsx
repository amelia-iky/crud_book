const Profile = () => {
    return (
        <div className="bg-white mx-3 rounded-lg h-5/6 my-11">
            <div className="flex flex-col">
                <h1 className="bg-gray-400 shadow-lg rounded-lg text-center text-3xl m-5 py-3">
                    Profile
                </h1>
                <div className="justify-center items-center my-5">
                    <img
                        src="https://i.pravatar.cc/150"
                        alt="profile"
                        className="rounded-full mx-auto w-3/4"
                    />
                </div>
                <div className="bg-gray-400 shadow-lg rounded-lg  m-3 py-3 pl-2">
                    <table>
                        <tr className="border-b">
                            <td className="py-3 px-1">Nama</td>
                            <td className="py-3 px-2">:</td>
                            <td className="py-3">Amelia Rizky Yuniar</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-1">NIM</td>
                            <td className="py-3 px-2">:</td>
                            <td className="py-3">2315091020</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
