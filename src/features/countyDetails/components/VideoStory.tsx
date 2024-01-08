import { Stack, Typography } from "@mui/material";

export default function VideoStory() {
  const data = {
    videoSrc: "",
    videoDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque explicabo rem voluptatibus! Tempora mollitia vero sapiente odit est nemo necessitatibus inventore quas sit, nulla dolor magnam corrupti provident voluptas impedit. Quaerat!",
  };
  return (
    <Stack gap={2} maxWidth={650}>
      <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
        Video Story
      </Typography>
      <video autoPlay controls src={data.videoSrc}></video>
      {data.videoDesc && (
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          {data.videoDesc}
        </Typography>
      )}
    </Stack>
  );
}
