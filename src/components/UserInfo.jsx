import PropTypes from "prop-types";

const UserInfo = ({ username }) => {
  return (
    <div className="mt-[3px] md:mt-2 gap-x-2 flex items-center font-karla text-base font-normal">
      <div className="w-8 h-8">
        <img
          src="https://www.socialnature.com/images/default-user.png"
          alt="Loading..."
        />
      </div>
      <p className="leading-5 text-[#333333]">{username}</p>
    </div>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserInfo;
