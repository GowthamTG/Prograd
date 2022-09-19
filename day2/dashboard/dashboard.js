var openSideNav = () => {
  const sideBarDisplay = document.getElementById("side-nav").style.display;
  console.log(sideBarDisplay.length);
  const width = screen.width;
  if (screen.width > 1080) {
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("side-nav").style.position = "static";
    document.getElementById("side-nav").style.height = "auto";
  } else if (sideBarDisplay.length === 4 || sideBarDisplay.length === 0) {
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("side-nav").style.position = "fixed";
    document.getElementById("side-nav").style.height = "100%";
    document.getElementById("side-nav").style.zIndex = 100;
  } else {
    document.getElementById("side-nav").style.display = "none";
  }
};
