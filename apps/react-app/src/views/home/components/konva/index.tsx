import { Layer, Rect, Stage, Text } from 'react-konva';

const Konva = () => {
  return (
    <Stage width={500} height={500}>
      <Layer>
        <Rect x={20} y={20} width={100} height={100} fill="red" draggable />
        <Text text="Try to drag a red rectangle" x={20} y={150} />
      </Layer>
    </Stage>
  );
};
export default Konva;
