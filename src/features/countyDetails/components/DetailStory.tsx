import { Stack, Typography } from "@mui/material";
import sampleImage from "../../../assets/mockData/Danny Little Bear.jpeg";

type DetailStoryProps = {
  storyTitle: string;
  description: string;
  imageDetails: {
    imgUrl: string;
    desc: string;
  };
};

export default function DetailStory({
  storyTitle,
  imageDetails,
  description,
}: DetailStoryProps) {
  return (
    <Stack>
      <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
        {storyTitle || "-"}
      </Typography>
      <Stack direction="row">
        {/* TODO:- needs to decide the method to display the description like wheather it is in the MD formate or something like this */}
        <Stack width={"50%"} gap={2}>
          <Typography
            color="ctaPrimary.main"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Danny Little Bear, of La Rue County, was a prominent professional
            wrestler. His wrestling career spanned from the 1950s to the 1980s.
            He participated in the National Wrestling Alliance and Stampeded
            Wrestling. His career began in Florida and Georgia. Throughout his
            career, he participated in both singles and tag-team matches. His
            most prominent feud happened with Black Angus Campbell. During the
            70s, this rivalry led to several bouts of street fighting and fan
            arrests in Kansas City.
          </Typography>
          <Typography
            color="ctaPrimary.main"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Little Bear won over 15 championships during his career. He often
            incorporated his Native American culture into his matches. He fought
            under the name 'Chief Little Bear' and used a move called the
            'Indian Deathlock' as his finisher. Little Bear retired after 461
            matches with a winning record.
          </Typography>
        </Stack>
        <Stack width={"50%"} px={5}>
          <img
            src={imageDetails.imgUrl || sampleImage}
            alt="story"
            style={{ width: "100%", border: "1px solid" }}
          />
          {imageDetails.desc && <Typography>{imageDetails.desc}</Typography>}
        </Stack>
      </Stack>
    </Stack>
  );
}
