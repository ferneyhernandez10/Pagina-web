import PropTypes from "prop-types";

const UserInfo = ({ user }) => {
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const avatar = user?.avatar;
  const image = avatar
    ? avatar
    : "https://www.socialnature.com/images/default-user.png";

  return (
    <div className="mt-[3px] md:mt-2 gap-x-2 flex items-center font-karla text-base font-normal">
      <div className="w-8 h-8">
        <img src={image} alt="Loading..." className="rounded-full" />
      </div>
      <p className="leading-5 text-[#333333]">{`${firstName} ${lastName[0]}.`}</p>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default UserInfo;
