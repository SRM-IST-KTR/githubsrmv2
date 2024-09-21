import Jimp from "jimp-compact";

const textOverlay = async (
    name,
    url,
    color,
    font_size,
    yOffset,
    jimpOptions
) => {
    // console.log("textOverlay function called");

    try {
        // console.log("Received color:", color);
        // console.log("Received font_size:", font_size);
        // console.log("Received yOffset:", yOffset);

        if (!color || !font_size || !yOffset) {
            return {
                buffer: null,
                error: true,
                error_message: "Missing required image config values."
            };
        }

        const fontKey = `FONT_${font_size}_${color.toUpperCase()}`;
        // console.log("Constructed fontKey:", fontKey);

        if (!jimpOptions[fontKey]) {
            return {
                buffer: null,
                error: true,
                error_message: `Invalid font combination: ${fontKey}`
            };
        }

        const font = await Jimp.loadFont(jimpOptions[fontKey]);
        const image = await Jimp.read(url);
        image.scaleToFit(1300, Jimp.AUTO, Jimp.RESIZE_BEZIER);

        image.print(
            font,
            0,
            parseInt(yOffset),
            {
                text: name,
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
            },
            1300,
            900
        );

        const bufferImage = await image.getBase64Async(Jimp.MIME_PNG);
        return { buffer: bufferImage, error: false, error_message: "Success" };
    } catch (error) {
        // console.log("Error in textOverlay:", error.message);
        return {
            buffer: null,
            error: true,
            error_message: error.message || "Failed"
        };
    }
};

export default textOverlay;
