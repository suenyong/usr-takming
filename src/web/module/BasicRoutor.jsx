import React from "react";
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
import logoImage from "./logo.png";
import "./menu.css";
import Idea from "./about_us/screens/idea";
import {useMenuConfig} from "./menu/setting/menuConfig";


export default function MenuComponent() {

    const { anchorEl } = useMenuConfig();
    const {articleAnchorEl} = useMenuConfig();
    const {caseAnchorEl} = useMenuConfig();
    const {hubAnchorEl} = useMenuConfig();
    const {usrAnchorEl} = useMenuConfig();
    const {usrSubmenuEl} = useMenuConfig();
    const {linkAnchorEl} = useMenuConfig();
    // contactAnchorEl,
    const {menuAnchorEl} = useMenuConfig();
    // hubSubmenuEl,
    const {windowWidth} = useMenuConfig();
    const {locationAnchorEl} = useMenuConfig();
    const {handleLocationClick} = useMenuConfig();
    const {handleLocationClose} = useMenuConfig();
    const {handleClick} = useMenuConfig();
    const {handleClose} = useMenuConfig();
    const {handleArticleClick} = useMenuConfig();
    const {handleArticleClose} = useMenuConfig();
    const {handleCaseClick} = useMenuConfig();
    const {handleCaseClose} = useMenuConfig()
    const {handleHubClick} = useMenuConfig();
    const {handleHubClose} = useMenuConfig();
    const {handleSubmenuClick} = useMenuConfig();
    const {handleUsrClick} = useMenuConfig();
    const {handleUsrClose} = useMenuConfig();
    const {handleUsrSubmenuClick} = useMenuConfig();
    const {handleUsrSubmenuClose} = useMenuConfig();
    const {handleLinkClick} = useMenuConfig();
    const {handleLinkClose} = useMenuConfig();
    const {handleMenuClick,} = useMenuConfig();
    const {handleMenuClose} = useMenuConfig();

  
 
  return (
    <>
      <Router>
        <div className="App" style={{ marginTop: "10px" }}>
          <div
            className="search-container"
            style={{ marginBottom: "10px", textAlign: "center", }}></div>
          <div style={{ display: "flex", justifyContent: "center", }}>
            <img src={logoImage} alt="德明USR" className="logo" />
          </div>

          <div className="nav-container">
            <div className="full-width-line"></div>
            <div className="line"></div>
            <div className="about-usr">

              {windowWidth > 950 ?
                <>
                  <Button className="about-usr-button" color="primary" disableElevation={true} onClick={handleClick}>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}> 關於我們</Typography>
                  </Button>

                  <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <Link to="/idea" target="_blank">
                      <MenuItem onClick={handleClose}>德明USR理念</MenuItem>
                    </Link>

                    <Link to="/PushCore" target="_blank">
                      <MenuItem onClick={handleClose}> 德明推動USR核心整合理念 </MenuItem>
                    </Link>

                    <Link to="/Promote" target="_blank">
                      <MenuItem onClick={handleClose}> 推動單位介紹 </MenuItem>
                    </Link>

                    <Link to="/Report" target="_blank">
                      <MenuItem onClick={handleClose}> 大學生社會責任年度報告書 </MenuItem>
                    </Link>
                  </Menu>

                  <Button className="service-button" color="primary" onClick={handleLocationClick}>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}>服務據點</Typography>
                  </Button>

                  <Menu id="location-menu" anchorEl={locationAnchorEl} keepMountedopen={Boolean(locationAnchorEl)} onClose={handleLocationClose}>
                    <MenuItem onClick={handleLocationClose}>服務足跡</MenuItem>
                  </Menu>

                  <Button className="article-button" color="primary" onClick={handleArticleClick}>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}>精彩報導</Typography>
                  </Button>

                  <Menu id="article-menu" anchorEl={articleAnchorEl} keepMountedopen={Boolean(articleAnchorEl)} onClose={handleArticleClose}>
                    <Link to="/Story" target="_blank">
                      <MenuItem onClick={handleArticleClose}>精彩報導</MenuItem>
                    </Link>
                  </Menu>

                  <Button className="case-button" color="primary" onClick={handleCaseClick}>
                    <ListItemIcon>
                      <ShareIcon />
                    </ListItemIcon>

                    <Link to="/Report" target="_blank">
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}>案例分享</Typography>
                    </Link>

                  </Button>

                  <Menu id="case-menu" anchorEl={caseAnchorEl} keepMountedopen={Boolean(caseAnchorEl)} onClose={handleCaseClose}>
                    <MenuItem onClick={handleCaseClose}>案例分享</MenuItem>
                  </Menu>

                  <Button className="hub-button" color="primary" onClick={handleHubClick}>
                    <ListItemIcon>
                      <GrainIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}>USR HUB</Typography>
                  </Button>

                  <Menu id="hub-menu" anchorEl={hubAnchorEl} keepMountedopen={Boolean(hubAnchorEl)} onClose={handleHubClose}>
                    <MenuItem onClick={handleSubmenuClick}>109</MenuItem>
                    <MenuItem onClick={handleSubmenuClick}>110</MenuItem>
                    <MenuItem onClick={handleSubmenuClick}>111</MenuItem>
                  </Menu>

                  <Button className="usr-button" color="primary" onClick={handleUsrClick}>
                    <ListItemIcon>
                      <LocalFloristIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}> USR</Typography>
                  </Button>

                  <Menu id="usr-menu" anchorEl={usrAnchorEl} keepMountedopen={Boolean(usrAnchorEl)} onClose={handleUsrClose}>
                    <MenuItem onClick={handleUsrSubmenuClick}> 內湖金面山在地風華 - 永續實踐計畫</MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClick}> 德明甘丹內科園區永續時尚實踐計畫</MenuItem>
                  </Menu>

                  <Menu id="usr-submenu" anchorEl={usrSubmenuEl} keepMountedopen={Boolean(usrSubmenuEl)} onClose={handleUsrSubmenuClose}>
                    <MenuItem onClick={handleUsrSubmenuClose}>計畫內容</MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClose}>課程發展與實施</MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClose}>場域經營</MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClose}>合作夥伴</MenuItem>
                    <MenuItem onClick={handleUsrSubmenuClose}>活動花絮</MenuItem>
                  </Menu>

                  <Button className="link-button" color="primary" onClick={handleLinkClick}>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", marginLeft: "-20px", }}>重要連結</Typography>
                  </Button>

                  <Menu id="link-menu" anchorEl={linkAnchorEl} keepMountedopen={Boolean(linkAnchorEl)} onClose={handleLinkClose}>
                    <MenuItem onClick={handleLinkClose}>重要連結</MenuItem>
                  </Menu>
                </>
                :
                <>
                  <Button className="menu-button" color="primary" onClick={handleMenuClick} style={{ marginRight: "-20px" }}>
                    <ListItemIcon>
                      <MenuIcon />
                    </ListItemIcon>
                  </Button>

                  <Menu id="simple-menu" anchorEl={menuAnchorEl} keepMountedopen={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>關於我們</MenuItem>
                    <MenuItem onClick={handleMenuClose}>服務據點</MenuItem>
                    <MenuItem onClick={handleMenuClose}>精彩報導</MenuItem>
                    <MenuItem onClick={handleMenuClose}>案例分享</MenuItem>
                    <MenuItem onClick={handleMenuClose}>USR HUB</MenuItem>
                    <MenuItem onClick={handleMenuClose}>USR</MenuItem>
                    <MenuItem onClick={handleMenuClose}>重要連結</MenuItem>
                  </Menu>
                </>
              }

            </div>
            <div className="line"></div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PushCore" element={<PushCore />} />
            <Route path="/Promote" element={<Promote />} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Story" element={<Story />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}
