import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";

const DrawerList = (
    // <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
    <Box sx={{ width: 250 }} role='presentation'>
        <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>inbox</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>inbox</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

const SidebarComp = (props: SidebarComponentTypes) => {
    const { open: drawerStatus } = props;
    return <Drawer open={drawerStatus}>{DrawerList}</Drawer>;
};

interface SidebarComponentTypes {
    open: boolean;
}

export default SidebarComp;
