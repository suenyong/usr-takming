import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArticleIcon from "@mui/icons-material/Article";
import ShareIcon from "@mui/icons-material/Share";
import GrainIcon from "@mui/icons-material/Grain";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LinkIcon from "@mui/icons-material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home/screens/Home";
import PushCore from "./about_us/screens/PushCore";
import Promote from "./about_us/screens/Promote";
import Report from "./about_us/screens/Report";
import Story from "./about_us/screens/Story";
import logoImage from "./logo2.png";
import "./menu.css";
// import Idea from "./about_us/screens/idea";
import CaseStudies from "./CaseStudies/screens/CaseStudies";
import Service from "./about_us/screens/Service";
import UH109 from "../module/USRHUB/screens/UH109";
import UH110 from "../module/USRHUB/screens/UH110";
import UH111 from "../module/USRHUB/screens/UH111";
import GMM from "./USR/screens/GMM";
import ImportantLink from "../module/ImportantLink/screens/ImportantLink";
import GD from "./USR/screens/GD";
import GMM_history from "./USR/screens/GMM_history";
import LohasCarbonDot from "./LohasCarbonDot/screens/LohasCarbonDot";


export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = useState(null);//關於我們的選單
  const [articleAnchorEl, setArticleAnchorEl] = useState(null);//精彩報導選單
  const [caseAnchorEl, setCaseAnchorEl] = useState(null);
  const [LohasCarbonDotAnchorEl, setLohasCarbonDotAnchorEl] = useState(null);
  const [hubAnchorEl, setHubAnchorEl] = useState(null);
  const [usrAnchorEl, setUsrAnchorEl] = useState(null);
  const [usrSubmenuEl, setUsrSubmenuEl] = useState(null);
  const [linkAnchorEl, setLinkAnchorEl] = useState(null);
  // const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [hubSubmenuEl, setHubSubmenuEl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [locationAnchorEl, setLocationAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);

  //服務足跡
  const handleLocationClick = (event) => {
    window.location.href = "/Service";
    handleMenuClose();
  };
  const handleLocationClose = () => {
    setLocationAnchorEl(null);
  };
  //關於我們
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleMenuClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //精彩報導
  const handleArticleClick = (event) => {
    window.location.href = "/Story"; // 将 "/your-article-page" 替换为你实际的目标页面 URL
    // 关闭菜单等其他操作
    handleMenuClose();
  };
  const handleArticleClose = () => {
    setArticleAnchorEl(null);
  };
  //精彩講座
  const handleCaseClick = (event) => {
    window.location.href = "/CaseStudies";
    handleMenuClose();
  };
  const handleCaseClose = () => {
    setCaseAnchorEl(null);
  };
  // 樂活探點
  const handleLohasCarbonDotClick = (event) => {
    window.location.href = "/LohasCarbonDot";
    handleMenuClose();
  };
  const handleLohasCarbonDotClose = () => {
    setLohasCarbonDotAnchorEl(null);
  };

  const handleHubClick = (event) => {
    setHubAnchorEl(event.currentTarget);
    handleMenuClose();
  };
  const handleHubClose = () => {
    setHubAnchorEl(null);
    setHubSubmenuEl(null);
  };

  const handleSubmenuClick = (event) => {
    setHubSubmenuEl(event.currentTarget);
    handleClose(); 
    setHubAnchorEl(null); // Close the hub menu after selecting a submenu item
  };
  const handleSubmenuClose = () => {
    setHubSubmenuEl(null);
  };
  //USR
  const handleUsrClick = (event) => {
    setUsrAnchorEl(event.currentTarget);
    handleMenuClose();
  };
  const handleUsrClose = () => {
    setUsrAnchorEl(null);
  };

  const handleUsrSubmenuClick = (event) => {
    if (event.currentTarget.textContent === "場域經營") {
      setSubmenuAnchorEl(event.currentTarget);
    } else {
      setUsrAnchorEl(null);
    }
  };
  const handleUsrSubmenuClose = () => {
    setSubmenuAnchorEl(null);
    setUsrAnchorEl(null);
  };


  const handleLinkClick = (event) => {
    window.location.href = "/ImportantLink";
    handleMenuClose();
  };
  const handleLinkClose = () => {
    setLinkAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const customIconStyle = {
    color: 'rgb(15, 125, 136)', // 在这里设置你想要的颜色
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App" style={{ margin: "auto" }}>


          <div className="nav-container">
            <div className="line-top">
              <div className="about-usr">
                <div className="home-logo">
                  <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <img src={logoImage} alt="德明USR" className="logo" />
                  </a>
                </div>
                {windowWidth > 958 ? (
                  <>
                    <Button
                      className="about-usr-button"
                      color="primary"
                      disableElevation={true}
                      onClick={handleClick}
                    >
                      <ListItemIcon>
                        <InfoIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography
                        // 
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",

                        }}
                      >
                        關於我們
                      </Typography>
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {/* <Link
                      to="/idea"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem onClick={handleClose}>德明USR理念</MenuItem>
                    </Link> */}

                      <Link
                        to="/PushCore"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>
                          德明推動USR核心整合理念
                        </MenuItem>
                      </Link>

                      {/* <Link
                        to="/Promote"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>推動單位介紹</MenuItem>
                      </Link> */}

                      <Link
                        to="/UH109"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>109年USR HUB計畫</MenuItem>
                      </Link>
                      <Link
                        to="/UH110"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>110年USR HUB計畫</MenuItem>
                      </Link>
                      <Link
                        to="/UH111"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>111年USR HUB計畫</MenuItem>
                      </Link>

                      <Link
                        to="/Report"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>
                          大學生社會責任年度報告書
                        </MenuItem>
                      </Link>
                    </Menu>
                    <Button
                      className="service-button"
                      color="primary"
                      onClick={handleLocationClick}
                    >
                      <ListItemIcon>
                        <LocationOnIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography

                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        服務據點
                      </Typography>
                    </Button>
                    <Menu
                      id="location-menu"
                      anchorEl={locationAnchorEl}
                      keepMounted
                      open={Boolean(locationAnchorEl)}
                      onClose={handleLocationClose}
                    >
                      <Link
                        to="/Service"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLocationClose}>服務據點</MenuItem>
                      </Link>
                    </Menu>
                    <Link
                      to="/Story"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Button
                        className="article-button"
                        color="primary"
                      >
                        <ListItemIcon>
                          <ArticleIcon style={customIconStyle} />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            color: "black",
                            marginLeft: "-20px",
                          }}
                        >
                          亮點報導
                        </Typography>
                      </Button>
                    </Link>
                    <Button
                      className="case-button"
                      color="primary"
                      onClick={handleCaseClick}
                    >
                      <ListItemIcon>
                        <ShareIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography

                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        精彩講座
                      </Typography>
                    </Button>
                    <Menu
                      id="case-menu"
                      anchorEl={caseAnchorEl}
                      keepMounted
                      open={Boolean(caseAnchorEl)}
                      onClose={handleCaseClose}
                    >
                      <Link
                        to="/CaseStudies"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleCaseClose}>精彩講座</MenuItem>
                      </Link>
                    </Menu>
                    <Button
                      className="hub-button"
                      color="primary"
                      onClick={handleLohasCarbonDotClick}
                    >
                      <ListItemIcon>
                        <GrainIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography

                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        樂活碳點
                      </Typography>
                    </Button>
                    <Menu
                      id="hub-menu"
                      anchorEl={LohasCarbonDotAnchorEl}
                      keepMounted
                      open={Boolean(LohasCarbonDotAnchorEl)}
                      onClose={handleLohasCarbonDotClick}
                    >
                      <Link
                        to="/LohasCarbonDot"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLohasCarbonDotClose}>
                          樂活碳點
                        </MenuItem>
                      </Link>
                    </Menu>
                    <Button
                      className="usr-button"
                      color="primary"
                      onClick={handleUsrClick}
                    >
                      <ListItemIcon>
                        <LocalFloristIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography

                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        USR實踐計畫
                      </Typography>
                    </Button>
                    <Menu
                      id="usr-menu"
                      anchorEl={usrAnchorEl}
                      keepMounted
                      open={Boolean(usrAnchorEl)}
                      onClose={handleUsrClose}
                    >
                      <Link
                        to="/GMM"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleUsrSubmenuClick}>
                          內湖金面山在地風華 - 永續實踐計畫
                        </MenuItem>
                      </Link>
                      <Link
                        to="/GD"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleUsrSubmenuClick}>
                          德明甘丹內科園區永續時尚實踐計畫
                        </MenuItem>
                      </Link>
                      {/* <MenuItem onClick={handleUsrSubmenuClick}>
                      場域經營
                    </MenuItem> */}
                    </Menu>

                    {/* <Menu
                    id="submenu-popper"
                    open={Boolean(submenuAnchorEl)}
                    anchorEl={submenuAnchorEl}
                    onClose={handleUsrSubmenuClose}
                  >
                    <MenuItem onClick={handleUsrSubmenuClose}>
                      內湖金面山
                    </MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClose}>
                      德明甘丹
                    </MenuItem>
                  </Menu> */}

                    <Button
                      className="link-button"
                      color="primary"
                      onClick={handleLinkClick}
                    >
                      <ListItemIcon>
                        <LinkIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        重要連結
                      </Typography>
                    </Button>
                    <Menu
                      id="link-menu"
                      anchorEl={linkAnchorEl}
                      keepMounted
                      open={Boolean(linkAnchorEl)}
                      onClose={handleLinkClose}
                    >
                      <Link
                        to="/ImportantLink"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLinkClose}>重要連結</MenuItem>
                      </Link>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Button
                      className="menu-button"
                      color="primary"
                      onClick={handleMenuClick}
                      style={{ marginRight: "-20px" }}
                    >
                      <ListItemIcon>
                        <MenuIcon style={customIconStyle} />
                      </ListItemIcon>
                    </Button>

                    <Menu
                      id="simple-menu"
                      anchorEl={menuAnchorEl}
                      keepMounted
                      open={Boolean(menuAnchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleClick}>關於我們</MenuItem>
                      <MenuItem onClick={handleLocationClick}>服務據點</MenuItem>
                      <MenuItem onClick={handleArticleClick}>亮點報導</MenuItem>
                      <MenuItem onClick={handleCaseClick}>精彩講座</MenuItem>
                      <MenuItem onClick={handleLohasCarbonDotClick}>樂活碳點</MenuItem>
                      <MenuItem onClick={handleUsrClick}>USR實踐計畫</MenuItem>
                      <MenuItem onClick={handleLinkClick}>重要連結</MenuItem>
                    </Menu>
                    {/* 關於我們選單 */}
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {/* <Link
                      to="/idea"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem onClick={handleClose}>德明USR理念</MenuItem>
                    </Link> */}

                      <Link
                        to="/PushCore"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>
                          德明推動USR核心整合理念
                        </MenuItem>
                      </Link>

                      {/* <Link
                        to="/Promote"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>推動單位介紹</MenuItem>
                      </Link> */}
                      <Link
                        to="/UH109"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>109年USR HUB計畫</MenuItem>
                      </Link>
                      <Link
                        to="/UH110"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>110年USR HUB計畫</MenuItem>
                      </Link>
                      <Link
                        to="/UH111"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleSubmenuClick}>111年USR HUB計畫</MenuItem>
                      </Link>
                      <Link
                        to="/Report"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>
                          大學生社會責任年度報告書
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* 服務據點選單 */}
                    {/* <Menu
                      id="location-menu"
                      anchorEl={locationAnchorEl}
                      keepMounted
                      open={Boolean(locationAnchorEl)}
                      onClose={handleLocationClose}
                    >
                      <Link
                        to="/Service"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLocationClose}>服務據點</MenuItem>
                      </Link>
                    </Menu> */}

                    {/* 案例分享 */}
                    <Menu
                      id="case-menu"
                      anchorEl={caseAnchorEl}
                      keepMounted
                      open={Boolean(caseAnchorEl)}
                      onClose={handleCaseClose}
                    >
                      <Link
                        to="/CaseStudies"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleCaseClose}>精彩講座</MenuItem>
                      </Link>
                    </Menu>
                    {/* 樂活碳點 */}
                    <Menu
                      id="LohasCarbonDo-menu"
                      anchorEl={LohasCarbonDotAnchorEl}
                      keepMounted
                      open={Boolean(LohasCarbonDotAnchorEl)}
                      onClose={handleLohasCarbonDotClose}
                    >
                      <Link
                        to="/LohasCarbonDot"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLohasCarbonDotClose}>樂活碳點</MenuItem>
                      </Link>
                    </Menu>

                    {/* USR */}
                    <Menu
                      id="usr-menu"
                      anchorEl={usrAnchorEl}
                      keepMounted
                      open={Boolean(usrAnchorEl)}
                      onClose={handleUsrClose}
                    >
                      <Link
                        to="/GMM"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleUsrSubmenuClick}>
                          內湖金面山在地風華 - 永續實踐計畫
                        </MenuItem>
                      </Link>
                      <Link
                        to="/GD"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleUsrSubmenuClick}>
                          德明甘丹內科園區永續時尚實踐計畫
                        </MenuItem>
                      </Link>
                      {/* <MenuItem onClick={handleUsrSubmenuClick}>
                      場域經營
                    </MenuItem> */}
                    </Menu>
                    <Menu
                      id="submenu-popper"
                      open={Boolean(submenuAnchorEl)}
                      anchorEl={submenuAnchorEl}
                      onClose={handleUsrSubmenuClose}
                    >
                      <MenuItem onClick={handleUsrSubmenuClose}>
                        內湖金面山
                      </MenuItem>
                      <MenuItem onClick={handleUsrSubmenuClose}>
                        德明甘丹
                      </MenuItem>
                    </Menu>
                    {/* 重要連結 */}
                    <Menu
                      id="link-menu"
                      anchorEl={linkAnchorEl}
                      keepMounted
                      open={Boolean(linkAnchorEl)}
                      onClose={handleLinkClose}
                    >
                      <Link
                        to="/ImportantLink"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleLinkClose}>重要連結</MenuItem>
                      </Link>
                    </Menu>

                  </>
                )}
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PushCore" element={<PushCore />} />
            <Route path="/Promote" element={<Promote />} />
            {/* <Route path="/idea" element={<Idea />} /> */}
            <Route path="/Report" element={<Report />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/CaseStudies" element={<CaseStudies />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/UH109" element={<UH109 />} />
            <Route path="/UH110" element={<UH110 />} />
            <Route path="/UH111" element={<UH111 />} />
            <Route path="/GMM" element={<GMM />} />
            <Route path="/GMM_history" element={<GMM_history />} />
            <Route path="/GD" element={<GD />} />
            <Route path="/ImportantLink" element={<ImportantLink />} />
            <Route path="/LohasCarbonDot" element={<LohasCarbonDot />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
