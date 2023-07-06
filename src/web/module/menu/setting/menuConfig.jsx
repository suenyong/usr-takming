import { useState, useEffect } from "react";

export const useMenuConfig = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [articleAnchorEl, setArticleAnchorEl] = useState(null);
  const [caseAnchorEl, setCaseAnchorEl] = useState(null);
  const [hubAnchorEl, setHubAnchorEl] = useState(null);
  const [usrAnchorEl, setUsrAnchorEl] = useState(null);
  const [usrSubmenuEl, setUsrSubmenuEl] = useState(null);
  const [linkAnchorEl, setLinkAnchorEl] = useState(null);
  const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [hubSubmenuEl, setHubSubmenuEl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [locationAnchorEl, setLocationAnchorEl] = useState(null);

  const handleLocationClick = (event) => {
    setLocationAnchorEl(event.currentTarget);
  };
  const handleLocationClose = () => {
    setLocationAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleArticleClick = (event) => {
    setArticleAnchorEl(event.currentTarget);
  };
  const handleArticleClose = () => {
    setArticleAnchorEl(null);
  };

  const handleCaseClick = (event) => {
    setCaseAnchorEl(event.currentTarget);
  };
  const handleCaseClose = () => {
    setCaseAnchorEl(null);
  };

  const handleHubClick = (event) => {
    setHubAnchorEl(event.currentTarget);
  };

  const handleHubClose = () => {
    setHubAnchorEl(null);
    setHubSubmenuEl(null);
  };

  const handleSubmenuClick = (event) => {
    setHubSubmenuEl(event.currentTarget);
    setHubAnchorEl(null); // Close the hub menu after selecting a submenu item
  };
  
  const handleSubmenuClose = () => {
    setHubSubmenuEl(null);
  };

  const handleUsrClick = (event) => {
    setUsrAnchorEl(event.currentTarget);
  };
  const handleUsrClose = () => {
    setUsrAnchorEl(null);
  };

  const handleUsrSubmenuClick = (event) => {
    setUsrSubmenuEl(event.currentTarget);
    setUsrAnchorEl(null); // Close the usr menu after selecting a submenu item
  };
  const handleUsrSubmenuClose = () => {
    setUsrSubmenuEl(null);
  };

  const handleLinkClick = (event) => {
    setLinkAnchorEl(event.currentTarget);
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

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    })
  }, [])



};
 
 