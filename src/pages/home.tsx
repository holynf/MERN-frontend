import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import landingImage from "../assets/images/landing.png";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomPaperItem from "../components/shared/CustomPaperItem.tsx";
import { branchesItems, menuItems } from "../utils/dummy-data.ts";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import secondLanding from "../assets/images/second_landing.jpg";
import Button from "@mui/material/Button";

const HomePage = () => {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Swiper modules={[Pagination]} className='mySwiper'>
                    {[...Array(2)].map(() => {
                        return (
                            <SwiperSlide>
                                <img src={landingImage} alt='' width={"100%"} height={"auto"} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {menuItems?.map((m) => {
                    return (
                        <Grid size={{ xs: 12, sm: 6, lg: 3 }} component={Link} to={m.route}>
                            <CustomPaperItem>
                                <img src={m.image} alt={m.key} height={"150px"} />
                                <Typography variant='p' component='p' sx={{ fontWeight: "600" }}>
                                    {m.title}
                                </Typography>
                            </CustomPaperItem>
                        </Grid>
                    );
                })}
            </Grid>
            <Box
                sx={{
                    backgroundImage: `url(${secondLanding})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    zIndex: -1,
                    position: "relative",
                    height: "300px",
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    borderRadius: 2,
                    mb: 4,
                }}
            >
                <Box
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant='h3' component='h3' sx={{ fontWeight: "700" }}>
                        رستوران‌های زنجیره‌ای ترخینه
                    </Typography>
                    <Typography variant='span' component='span' sx={{ fontWeight: "700" }}>
                        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش
                        از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای
                        ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در
                        کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                    </Typography>
                    <Button>اطلاعات بیشتر</Button>
                </Box>
                <Box
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Box>
            </Box>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {branchesItems?.map((b) => {
                    return (
                        <Grid size={{ xs: 12, sm: 6, lg: 3 }} component={Link} to={b.route}>
                            <CustomPaperItem>
                                <img src={b.image} alt={b.key} height={"170px"} width={"100%"} />
                                <Typography variant='p' component='p' sx={{ fontWeight: "700" }}>
                                    {b.title}
                                </Typography>
                                <hr />
                                <Typography variant='p' component='p' sx={{ fontWeight: "400" }}>
                                    {b.short_description}
                                </Typography>
                            </CustomPaperItem>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
export default HomePage;
