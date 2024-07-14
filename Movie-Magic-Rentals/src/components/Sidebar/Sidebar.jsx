import CommingSoon from "../../assets/icons/commingSoon.svg";
import Favourite from "../../assets/icons/favourite.svg";
import newRelease from "../../assets/icons/newRelease.svg";
import Trending from "../../assets/icons/trending.svg";
import WatchLater from "../../assets/icons/watchLater.svg";

const Sidebar = () => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={Trending} width="24" height="24" alt="Trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={newRelease} width="24" height="24" alt="newRelease" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={CommingSoon} width="24" height="24" alt="CommingSoon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Favourite} width="24" height="24" alt="Favourite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={WatchLater} width="24" height="24" alt="WatchLater" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
