import { IBlobSvg } from "@/@types/UI";

const BlobSvg = (props: IBlobSvg) => {
  const { color = "#3B82F6" } = props;

  return (
    <svg
      width={400}
      height={400}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M34.9,-47C42.3,-35.4,43.3,-21.6,49.7,-5.7C56,10.1,67.8,28.1,65,41.7C62.1,55.4,44.5,64.8,27.2,68.4C9.8,72,-7.4,69.8,-19.9,62C-32.3,54.3,-40,40.9,-45.1,28C-50.1,15.1,-52.5,2.7,-51.7,-10.4C-51,-23.6,-47.1,-37.5,-37.9,-48.9C-28.8,-60.2,-14.4,-68.8,-0.3,-68.5C13.8,-68.1,27.5,-58.6,34.9,-47Z"
        transform="translate(100 100) scale(1.1)"
      />
    </svg>
  );
};

export default BlobSvg;