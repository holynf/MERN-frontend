import secondLanding from "../../assets/images/second_landing.jpg";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { secondLandingItems } from "../../utils/dummy-data.ts";
import SharedBackgroundImageBox from "../shared/BackgroundImageBox.tsx";

const HomeSecondLanding = () => {
    const dynamicStyles = {
        borderRadius: 2,
    };

    return (
        <SharedBackgroundImageBox image={secondLanding} style={dynamicStyles}>
            <Grid
                container
                sx={{
                    color: "white",
                    width: "100%",
                    height: "100%",
                    p: 2,
                    mb: 2,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, md: 12 }}
            >
                <Grid
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                    }}
                    size={{ xs: 12, md: 6 }}
                >
                    <Typography variant='h4' component='h4' sx={{ fontWeight: "700" }}>
                        رستوران‌های زنجیره‌ای ترخینه
                    </Typography>
                    <Typography variant='div' component='div' sx={{ fontWeight: "200", my: 2 }}>
                        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش
                        از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای
                        ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در
                        کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                    </Typography>
                    <Button variant={"outlined"} sx={{ marginInlineStart: "auto" }}>
                        اطلاعات بیشتر
                    </Button>
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                    {secondLandingItems.map((i) => {
                        const Icon = i.icon;
                        return (
                            <Grid
                                key={i.id}
                                size={{ xs: 6, md: 6 }}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    borderRadius: 1,
                                }}
                            >
                                <Icon />
                                <p>{i.title}</p>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </SharedBackgroundImageBox>
    );
};
export default HomeSecondLanding;
