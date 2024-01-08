import { IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalHeaderProps = {
  title: string;
  padding?: number;
  helperText?: string;
  onClose?: () => void;
};

export default function ModalHeader({
  title,
  helperText,
  padding = 3,
  onClose,
}: ModalHeaderProps) {
  return (
    <Stack p={padding}>
      <Stack direction="row" alignItems="flex-start">
        <Typography
          variant="h3"
          sx={{
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        {onClose && (
          <IconButton
            sx={{
              py: 0,
            }}
            onClick={onClose}
          >
            <CloseIcon
              color="primary"
              sx={{
                width: "40px",
                fontSize: "40px",
              }}
            />
          </IconButton>
        )}
      </Stack>
      {helperText && (
        <Typography
          mt={2}
          sx={{
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
}
