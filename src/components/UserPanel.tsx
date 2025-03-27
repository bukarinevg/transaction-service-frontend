import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";


const UserPanel = () => {

    return (
        <div className="mb-2">
            <div className="flex justify-between items-center">
                <UserInfo />
                <LogoutButton />
            </div>
            <div className="border-t border-gray-300 w-full mt-2"></div>
        </div>
    )
}

export default UserPanel;