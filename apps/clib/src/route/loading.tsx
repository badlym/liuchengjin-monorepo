interface ILoadingProps {
  src?: string;
}

const Loading: React.FC<ILoadingProps> = ({ src }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        minHeight: '500px',
        background: `no-repeat center/50px url(${src})`,
      }}
    />
  );
};
export default Loading;
