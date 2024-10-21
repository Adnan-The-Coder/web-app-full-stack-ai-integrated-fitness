export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
            <div className="max-w-md w-full bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    User Profile
                </h1>
                <hr className="my-4 border-gray-600" />
                <p className="text-4xl text-center">
                    Profile Page of{" "}
                    <span className="p-2 rounded bg-orange-500 text-black">
                        {params.id}
                    </span>
                </p>
            </div>
        </div>
    );
}
