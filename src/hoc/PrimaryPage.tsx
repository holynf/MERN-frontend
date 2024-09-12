import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.tsx";
import Header from "../components/layout/Header.tsx";
import { Box, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

const PrimaryLayout = () => {
    return (
        <Box>
            <CssBaseline />
            <Sidebar open={false} />
            <Box position={"relative"}>
                <Header />
                {/*<BreadCrumb/>*/}
                <Container maxWidth='lg' disableGutters component='main'>
                    <Outlet />
                </Container>
                {/*<Footer/>*/}
            </Box>
        </Box>
    );
};
export default PrimaryLayout;
