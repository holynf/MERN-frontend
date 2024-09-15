import footerImage from "../../assets/images/footer.png";
import SharedBackgroundImageBox from "../shared/BackgroundImageBox.tsx";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const FooterComp = () => {
    return (
        <SharedBackgroundImageBox image={footerImage}>
            <Grid
                container
                maxWidth='lg'
                sx={{
                    color: "white",
                    marginX: "auto",
                    width: "100%",
                    height: "100%",
                    p: 2,
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12 }}
            >
                <Grid
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                    }}
                    size={{ xs: 12, md: 4 }}
                >
                    <Typography sx={{ fontWeight: 700, mb: 2 }}>دسترسی آسان</Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        پرسش‌های متداول
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        قوانین ترخینه
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        حریم خصوصی
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>ico1</Typography>
                </Grid>
                <Grid
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                    }}
                    size={{ xs: 12, md: 4 }}
                >
                    <Typography sx={{ fontWeight: 700, mb: 2 }}>شعبه‌های ترخینه</Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        شعبه اکباتان
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        شعبه چالوس
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        شعبه اقدسیه
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: "0.8em", mb: 1 }}>
                        شعبه ونک
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "white",
                    }}
                    size={{ xs: 12, md: 4 }}
                >
                    <Typography sx={{ fontWeight: 700, mb: 2 }}>پیام به ترخینه</Typography>
                    <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-input'
                                label='name'
                                type='text'
                                fullWidth
                                autoComplete='نام و نام خانوادگی'
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                id='outlined-input'
                                label='mobile'
                                type='text'
                                fullWidth
                                autoComplete='شماره تماس'
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                id='outlined-input'
                                label='email'
                                fullWidth
                                type='text'
                                autoComplete='آدرس ایمیل (اختیاری)'
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id='outlined-input'
                                label='user-text'
                                fullWidth
                                type='text'
                                autoComplete='آدرس ایمیل (اختیاری)'
                                sx={{ mb: 2 }}
                            />
                            <Button variant={"contained"} fullWidth>
                                ارسال پیام
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SharedBackgroundImageBox>
    );
};
export default FooterComp;
