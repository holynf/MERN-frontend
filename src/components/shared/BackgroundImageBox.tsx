import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SharedBackgroundImageBoxTypes {
    image: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}

const SharedBackgroundImageBox: React.FC<SharedBackgroundImageBoxTypes> = ({
    children,
    image,
    style,
}) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: -1,
                position: "relative",
                ...style,
            }}
        >
            {children}
        </Box>
    );
};
export default SharedBackgroundImageBox;
