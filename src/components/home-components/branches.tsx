import { branchesItems } from "../../utils/dummy-data.ts";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import CustomPaperItem from "../shared/CustomPaperItem.tsx";
import CustomImageComp from "../shared/CustomImageComp.tsx";
import Typography from "@mui/material/Typography";

const HomeBranches = () => {
    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            {branchesItems?.map((b) => {
                return (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} component={Link} to={b.route}>
                        <CustomPaperItem>
                            <CustomImageComp
                                src={b.image}
                                alt={b.key}
                                height={"170px"}
                                width={"100%"}
                            />
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
    );
};
export default HomeBranches;
