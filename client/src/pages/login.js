import GoogleLogin from "../components/GoogleLogin";

const LoginPage = ({ user, setUser }) => {
    return (
        <div className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center p-4 bg-[#f8fafd]`} style={{ fontFamily: 'Quicksand' }}>
            <div className="flex flex-col justify-between items-center p-8  md:p-16 rounded-2xl shadow-lg border w-max">
                <h1 className="text-3xl md:text-5xl text-black font-semibold w-max">
                    Welcome to the<br />
                    <span className={`text-[2.6rem] md:text-[4.6rem] text-black font-semibold`} style={{ fontFamily: 'Inter' }}> Bunker 🗃️</span>
                </h1>
                <div className="text-xs md:text-lg text-gray-500 mb-10 md:mb-12 mt-3 md:mt-3">Your very own Google Drive Clone</div>
                <GoogleLogin user={user} setUser={setUser} />
            </div>
        </div>
    );
}

export default LoginPage;
