import ArticleIcon from "@mui/icons-material/Article";
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import GrainIcon from "@mui/icons-material/Grain";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";
import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Partner from "./USR/screens/Partner";
import PushCore from "./about_us/screens/PushCore";
import Report from "./about_us/screens/Report";
import Story from "./about_us/screens/Story";
import Home from "./home/screens/Home";
import logoImage from "./logo2.png";
import "./menu.css";
// import Idea from "./about_us/screens/idea";
import ImportantLink from "../module/ImportantLink/screens/ImportantLink";
import UH109 from "../module/USRHUB/screens/UH109";
import UH110 from "../module/USRHUB/screens/UH110";
import UH111 from "../module/USRHUB/screens/UH111";
import BusinessDistrict from "../module/XIHU/screns/BusinessDistrict";
import GMMReport from "../module/XIHU/screns/GMMReport";
import CaseStudies from "./CaseStudies/screens/CaseStudies";
import Chillax from "./Chillax/screens/chillax";
import LohasCarbonDot from "./LohasCarbonDot/screens/LohasCarbonDot";
import GD from "./USR/screens/GD";
import GMM from "./USR/screens/GMM";
import GMM_history from "./USR/screens/GMM_history";
import Service from "./about_us/screens/Service";

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = useState(null);//關於我們選單
  const [XIHUanchorEl, setXIHUAnchorEl] = useState(null);//關於我們選單
  const [articleAnchorEl, setArticleAnchorEl] = useState(null);//精彩報導選單
  const [caseAnchorEl, setCaseAnchorEl] = useState(null);//精彩講座選單
  const [LohasCarbonDotAnchorEl, setLohasCarbonDotAnchorEl] = useState(null);//樂活碳點
  const [hubAnchorEl, setHubAnchorEl] = useState(null);//HUB選單
  const [hubSubmenuEl, setHubSubmenuEl] = useState(null);//HUB選單
  const [usrAnchorEl, setUsrAnchorEl] = useState(null);//USR選單
  const [usrSubmenuEl, setUsrSubmenuEl] = useState(null);//USR選單
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [locationAnchorEl, setLocationAnchorEl] = useState(null);//服務足跡選單
  const [linkAnchorEl, setLinkAnchorEl] = useState(null);//重要連結選單
  const [ChillaxAnchorEl, setChillaxAnchorEl] = useState(null);//chillax選單
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  //關於我們
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleMenuClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //認識西湖
  const handleXIHUClick = (event) => {
    setXIHUAnchorEl(event.currentTarget);
    handleMenuClose();
  };
  const handleXIHUClose = () => {
    setXIHUAnchorEl(null);
  };
  //服務足跡
  const handleLocationClick = (event) => {
    window.location.href = "/Service";
    handleMenuClose();
  };
  const handleLocationClose = () => {
    setLocationAnchorEl(null);
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

  //Chillax
  const handleChillaxClick = (event) => {
    window.location.href = "/Chillax";
    handleMenuClose();
  };
  const handleChillaxClose = () => {
    setChillaxAnchorEl(null);
  };

  //Hub
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

 //重要連結
  const handleLinkClick = (event) => {
    window.location.href = "/ImportantLink";
    handleMenuClose();
  };
  const handleLinkClose = () => {
    setLinkAnchorEl(null);
  };

  // 手機視窗
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  

  const customIconStyle = {
    color: 'rgb(15, 125, 136)',
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
                {windowWidth > 1048 ? (
                  <>
                    {/* 關於我們 =====================================================*/}
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
                        <MenuItem onClick={handleClose}>大學生社會責任年度報告書 </MenuItem>
                      </Link>
                    </Menu>
                    {/* 關於我們 =====================================================*/}
                    <Button
                      className="about-usr-button"
                      color="primary"
                      disableElevation={true}
                      onClick={handleXIHUClick}
                    >
                      <ListItemIcon>
                        <FilterHdrIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",

                        }}
                      >
                        認識西湖
                      </Typography>
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={XIHUanchorEl}
                      keepMounted
                      open={Boolean(XIHUanchorEl)}
                      onClose={handleXIHUClose}
                    >

                      <Link
                        to="/BusinessDistrict"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleXIHUClose}>西湖商圈 </MenuItem>
                      </Link>

                      <Link
                        to="/GMMReport"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleXIHUClose}>金面山報導 </MenuItem>
                      </Link>
                    </Menu>

                   {/* 服務據點 ===================================================== */}
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
                   {/* 亮點報導 ===================================================== */}
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
                    {/* 精彩講座 =====================================================*/}
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
                    {/* 樂活碳點 =====================================================*/}
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
                    {/* USR計畫 =====================================================*/}
                    <Button
                      className="usr-button"
                      color="primary"
                      onClick={handleUsrClick}
                    >
                      <ListItemIcon>
                        <LocalFloristIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography
                        lang="en"
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        USR計畫
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
                      <Link
                        to="/Partner"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>USR合作夥伴</MenuItem>
                      </Link>
                    </Menu>
                    {/* 重要連結 =====================================================*/}
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
                    {/* Chillax ==================================================== */}
                    {/* <Button
                      className="hub-button"
                      color="primary"
                      onClick={handleChillaxClick}
                    >
                      <ListItemIcon>
                        <AirportShuttleIcon style={customIconStyle} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          marginLeft: "-20px",
                        }}
                      >
                        Chillax
                      </Typography>
                    </Button>
                    <Menu
                      id="hub-menu"
                      anchorEl={ChillaxAnchorEl}
                      keepMounted
                      open={Boolean(ChillaxAnchorEl)}
                      onClose={handleChillaxClick}
                    >
                      <Link
                        to="/Chillax"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleChillaxClose}>
                          Chillax
                        </MenuItem>
                      </Link>
                    </Menu> */}

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
                      <MenuItem onClick={handleXIHUClick}>認識西湖</MenuItem>
                      <MenuItem onClick={handleLocationClick}>服務據點</MenuItem>
                      <MenuItem onClick={handleArticleClick}>亮點報導</MenuItem>
                      <MenuItem onClick={handleCaseClick}>精彩講座</MenuItem>
                      <MenuItem onClick={handleLohasCarbonDotClick}>樂活碳點</MenuItem>
                      <MenuItem onClick={handleUsrClick}>USR 計畫</MenuItem>
                      <MenuItem onClick={handleLinkClick}>重要連結</MenuItem>
                      {/* <MenuItem onClick={handleChillaxClick}>Chillax</MenuItem> */}
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
                    {/* 認識西湖選單 */}
                    <Menu
                      id="simple-menu"
                      anchorEl={XIHUanchorEl}
                      keepMounted
                      open={Boolean(XIHUanchorEl)}
                      onClose={handleXIHUClose}
                    >
                      <Link
                        to="/BusinessDistrict"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleXIHUClose}>西湖商圈 </MenuItem>
                      </Link>
                      <Link
                        to="/GMMReport"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleXIHUClose}>金面山報導 </MenuItem>
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
                    {/* chllax */}
                    {/* <Menu
                      id="LohasCarbonDo-menu"
                      anchorEl={ChillaxAnchorEl}
                      keepMounted
                      open={Boolean(ChillaxAnchorEl)}
                      onClose={handleChillaxClose}
                    >
                      <Link
                        to="/Chillax"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleChillaxClose}>chllax</MenuItem>
                      </Link>
                    </Menu> */}

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
                      <Link
                        to="/Partner"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>USR合作夥伴</MenuItem>
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
                      <MenuItem onClick={handleUsrSubmenuClose}>
                        USR合作夥伴
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
            <Route path="/Partner" element={<Partner />} />
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
            <Route path="/Chillax" element={<Chillax />} />
            <Route path="/BusinessDistrict" element={<BusinessDistrict />} />
            <Route path="/GMMReport" element={<GMMReport />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
