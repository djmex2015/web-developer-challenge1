import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./Avatar.css";

export interface AvatarProps {
  onDataChange: (data: string) => void;
  removeImage: boolean;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 30,
});

export function Avatar({ removeImage, onDataChange }: AvatarProps) {
  const [fileBase64, setFileBase64] = useState<string>("");

  useEffect(() => setFileBase64(""), [removeImage]);

  function handleChange(event: any) {
    console.log(event.target.files[0]);
    convertFile(event.target.files);
  }

  const convertFile = async (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        const file = `data:${fileType};base64,${btoa(ev.target.result)}`;
        setFileBase64(file);
        onDataChange(file);
      };
    } else {
      onDataChange("");
    }
  };

  return (
    <div className="avatar">
      <Button
        component="label"
        variant="contained"
        style={{ backgroundImage: fileBase64 }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <img
          key={1}
          src={fileBase64}
          alt="Click to add img"
          width="10"
          height="10"
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <VisuallyHiddenInput type="file" onChange={handleChange} />
      </Button>
    </div>
  );
}
