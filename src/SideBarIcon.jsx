import PropTypes from 'prop-types';

export const SideBarIcon = ({ icon } ) => {
   return (
     <>
       <div className="sidebar-icon">{icon}</div>
     </>
   );
 };
 SideBarIcon.propTypes = {
   icon: PropTypes.node.isRequired,
 };