import { Box } from "@mui/material";

interface ImageComponentTypes {
    src: string;
    style?: React.CSSProperties;
    alt?: string;
    height?: string;
    width?: string;
}

const CustomImageComp: React.FC<ImageComponentTypes> = ({ src, style, alt, height, width }) => {
    return <Box component='img' sx={style} alt={alt} src={src} width={width} height={height} />;
};
export default CustomImageComp;
