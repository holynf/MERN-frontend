import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CustomImageComp from "../shared/CustomImageComp.tsx";
import landingImage from "../../assets/images/landing.png";

const HomeLanding = () => {
    const customLandingImageStyles = {
        height: 233,
        width: "100%",
        maxHeight: { xs: 160, md: 300 },
        borderRadius: 2,
    };

    return (
        <Box sx={{ my: 1 }}>
            <Swiper modules={[Pagination]} className='mySwiper'>
                {[...Array(2)].map(() => {
                    return (
                        <SwiperSlide>
                            <CustomImageComp style={customLandingImageStyles} src={landingImage} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Box>
    );
};
export default HomeLanding;
