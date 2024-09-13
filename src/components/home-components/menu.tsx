import { menuItems } from "../../utils/dummy-data.ts";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import CustomPaperItem from "../shared/CustomPaperItem.tsx";
import Typography from "@mui/material/Typography";

const HomeMenu = () => {
    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            {menuItems?.map((m) => {
                return (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} component={Link} to={m.route}>
                        <CustomPaperItem>
                            <img src={m.image} alt={m.key} height={"150px"} />
                            <Typography variant='p' component='p' sx={{ fontWeight: "600", mb: 1 }}>
                                {m.title}
                            </Typography>
                        </CustomPaperItem>
                    </Grid>
                );
            })}
        </Grid>
    );
};
export default HomeMenu;
