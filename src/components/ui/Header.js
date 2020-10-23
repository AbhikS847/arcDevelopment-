import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme=>({
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom:'3em',
    [theme.breakpoints.down('md')]:{
      marginBottom:'2em'
    },
    [theme.breakpoints.down('xs')]:{
      marginBottom:'1.25em'
    }
  },
  logo:{
    height:'8em',
    [theme.breakpoints.down('md')]:{
      height:'7em'
    },
    [theme.breakpoints.down('xs')]:{
      height:'5.5.em'
    }
  },
  tabContainer:{
    marginLeft:'auto'
  },
  Tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:'25px'
  },
  button:{
    ...theme.typography.estimate,
    borderRadius:'50px',
    marginLeft:'50px',
    marginRight:'25px',
    height:45
  },
  logoContainer:{
    padding:0,
  },
  menu:{
    backgroundColor:theme.palette.common.Blue,
    color:'#FFFFFF',
    borderRadius:0
  },
  menuItem:{
    ...theme.typography.tab,
    opacity:0.7,
    "&:hover":{
      opacity:1
    }
  },
  drawerIcon:{
    width:50,
    height:50
  },
  drawerIconContainer:{
    marginLeft:'auto',
    "&:hover":{
      backgroundColor:"transparent"
    }
  },
  drawer:{
    backgroundColor:theme.palette.common.Blue
  },
  drawerItem:{
    ...theme.typography.tab,
    color:'white',
    opacity:0.7
  },
  drawerItemEstimate:{
    backgroundColor:theme.palette.common.Orange
  },
  drawerItemSelected:{
    "& .MuiListItemText-root":{
      opacity:1
    }
  },
  appBar:{
    zIndex:theme.zIndex.modal+1
  }
}))

function ElevationScroll(props) {
    const { children,} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function Header(props){
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value,setValue] = useState(0);
  const [anchorEl,setAnchorEl] = useState(null);
  const [openMenu,setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e,newValue) =>{
    setValue(newValue);
  }

  const handleClick = (e) =>{
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = (e) =>{
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (e,i) =>{
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i)
  }

  const menuOptions = [
    {
      name:"Services",
      link:"/services",
      activeIndex:1,
      selectedIndex:0
    },
    {
      name:"Custom Software Development",
      link:"/customsoftware",
      activeIndex:1,
      selectedIndex:1
    },
    {
      name:"Mobile Applications",
      link:"/mobileapps",
      activeIndex:1,
      selectedIndex:2
    },
    {
      name:"Websites",
      link:"/websites",
      activeIndex:1,
      selectedIndex:3
    }
  ]

  const routes = [
    {
      name:'Home',
      link:'/',
      activeIndex:0
    },
    {
      name:"Services",
      link:"/services",
      activeIndex:1,
      ariaOwns:anchorEl ? "simple-menu":undefined,
      ariaPopUp:anchorEl ? "true":undefined,
      mouseOver:event=>handleClick(event)
    },
    {
      name:"Revolution",
      link:"/revolution",
      activeIndex:2
    },
    {
      name:"About us",
      link:"/about",
      activeIndex:3
    },
    {
      name:"Contact us",
      link:"/contact",
      activeIndex:4
    }
    
  ]

  useEffect(() =>{
    [...menuOptions,...routes].forEach(route=>{
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activeIndex){
            setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !==selectedIndex ){
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
          default:
            break;
      }
    })
  },value,menuOptions,selectedIndex,routes)

  const tabs = (
    <React.Fragment>
    <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
    {routes.map((route,index)=>(
      <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}></Tab>
    ))}
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>Free estimate</Button>
                <Menu id="simple-menu" classes={{paper:classes.menu}} anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{onMouseLeave:handleClose}} elevation={0} style={{zIndex:1302}}>
                {menuOptions.map((option,i)=>{return <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(event)=>{handleMenuItemClick(event,i);setValue(1);handleClose()}} selected={i===selectedIndex && value===1}>{option.name}</MenuItem>})}
                </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)} classes={{paper:classes.drawer}}>
    <div className={classes.toolbarMargin}></div>
    <List disablePadding>
    {routes.map(route => (
      <ListItem key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link} selected={value === route.activeIndex} classes={{selected:classes.drawerItemSelected}} onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex)}}>
        <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
      </ListItem>
    ))}
      <ListItem className={{root:classes.drawerItemEstimate,selected:classes.drawerItemSelected}} divider button onClick={()=>{setOpenDrawer(false);setValue(5)}} component={Link} to="/estimate" selected={value===5}>
      <ListItemText className={classes.drawerItem} disableTypography>Free estimate</ListItemText>
      </ListItem>
    </List>
    </SwipeableDrawer>
    <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)}>
      <MenuIcon className={classes.drawerIcon}></MenuIcon>
    </IconButton>
    </React.Fragment>
  )

    return (
        <div>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar disableGutters={true}>
                <Button component = {Link} disableRipple to ="/" className={classes.logoContainer} onClick={()=>{setValue(0)}}><img src={logo} clasName={classes.logo} alt="Company logo"></img></Button>
                {matches ? drawer : tabs }
                </Toolbar>
            </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </div>
    )
}