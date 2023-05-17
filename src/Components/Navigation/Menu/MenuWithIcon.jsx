import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import DashboardTwoToneIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { AccessTime, AccountBalanceWallet, AccountCircle, AddCard, AddTask, AnalyticsSharp, CreditCard, DynamicForm, InsertInvitation, LibraryBooks, ManageHistory, PunchClockSharp, ThumbsUpDownSharp, VerifiedSharp, VerifiedUserSharp } from '@mui/icons-material';
import Apon from '../../Layout/Apon';
import { Link } from 'react-router-dom';
import '../SidebarLayout.css'



const MenuWithIcon = () => {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
        <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton

       component={Link}
       to="/"
      
      >
        <ListItemIcon>
          <DashboardTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton

       component={Link}
       to="/employees"
      
      >
        <ListItemIcon>
          <ManageHistory />
        </ListItemIcon>
        <ListItemText primary="User Management" />
      </ListItemButton>

      <ListItemButton 
      component={Link}
       to="/attendence"
      >
        <ListItemIcon>
          <DynamicForm />
        </ListItemIcon>
        <ListItemText primary="Quiz Management" />
      </ListItemButton>
      <ListItemButton 
      component={Link}
       to="/ngo"
      >
        <ListItemIcon>
          <DynamicForm />
        </ListItemIcon>
        <ListItemText primary="NGO" />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccessTime />
        </ListItemIcon>
        <ListItemText primary="Time Clock" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
      <ListItemButton
      component={Link}
       to="/payruns"
      >
        <ListItemIcon>
          <AnalyticsSharp />
        </ListItemIcon>
        <ListItemText primary="Analytics and reporting" />
      </ListItemButton>
      <ListItemButton  
       component={Link}
       to="/approvals"
       >
        <ListItemIcon>
          <PunchClockSharp />
        </ListItemIcon>
        <ListItemText primary="Quiz scheduling" />
      </ListItemButton>
      <ListItemButton
       component={Link}
       to="/salarydetails"
      >
        <ListItemIcon>
          <ThumbsUpDownSharp />
        </ListItemIcon>
        <ListItemText primary="Feedback and support" />
      </ListItemButton>
      <ListItemButton
      component={Link}
       to="/investments"
      >
        <ListItemIcon>
          <VerifiedUserSharp />
        </ListItemIcon>
        <ListItemText primary="Data security and privacy" />
      </ListItemButton>
    </List>

  );
};

export default MenuWithIcon;