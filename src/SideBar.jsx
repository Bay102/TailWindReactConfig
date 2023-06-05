// npm install react-icons --save  (run this for icons)

import {
  FaBeer,
  FaSpotify,
  FaRenren,
  FaRust,
  FaTwitterSquare,
} from 'react-icons/fa';
import { SideBarIcon } from './SideBarIcon';

export const SideBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<FaSpotify size="20" />} />
        <SideBarIcon icon={<FaRenren size="20" />} />
        <SideBarIcon icon={<FaTwitterSquare size="20" />} />
        <SideBarIcon icon={<FaRust size="20" />} />
        <SideBarIcon icon={<FaBeer size="20" />} />
      </div>
    </>
  );
};
