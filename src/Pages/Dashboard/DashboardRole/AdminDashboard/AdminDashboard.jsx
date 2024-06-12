import useAllUsers from "../../../../Hooks/useAllUsers";
import useAuth from "../../../../Hooks/useAuth";
import useDataLoad from "../../../../Hooks/useDataLoad";

const AdminDashboard = () => {

    const { user } = useAuth()
    const [users] = useAllUsers()
    const [donationRequests] = useDataLoad()
    const usersLength = users.filter(user => user.role === 'donor')

    return (
        <div className="w-[98%] mx-auto">
            <div className="text-center">
                <h1 className="text-3xl  font-semibold mt-5 mb-3">Welcome to <span className="text-orange-600">{user.displayName}</span></h1>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-5 ">

                <div className="stat bg-gray-200 rounded-lg">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-primary">{usersLength.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat bg-blue-200  rounded-lg">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Donation Requests</div>
                    <div className="stat-value text-secondary">{donationRequests.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat bg-purple-200  rounded-lg">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className=" rounded-full h-[70px] bg-gray-100 w-[70px]">

                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;