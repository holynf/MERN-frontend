import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.tsx";
import Header from "../components/layout/Header.tsx";
import { Box, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Footer from "../components/layout/Footer.tsx";

const PrimaryLayout = () => {
    return (
        <Box>
            <CssBaseline />
            <Sidebar open={false} />
            <Box position={"relative"}>
                <Header />
                {/*<BreadCrumb/>*/}
                <Container maxWidth='lg' component='main'>
                    <Outlet />
                </Container>
                <Footer />
            </Box>
        </Box>
    );
};
export default PrimaryLayout;
