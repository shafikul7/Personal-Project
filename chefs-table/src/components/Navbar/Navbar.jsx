
const Navbar = () => {
  return (
    <div className="flex justify-between">
       <a>Navbar</a>
    <div>
      <ul className="flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <form>
        <input type="text" placeholder="Search.." />
      </form>
     
        <a href="https://www.google.com" target="_blank">Google</a>
  
    </div>
    </div>
  );
};

export default Navbar;
