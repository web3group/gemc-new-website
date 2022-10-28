const Content = ({ children, noPadding }) => {
  return (
    <main
      className={`bg-black text-white min-h-screen ${
        noPadding || "px-16 py-4"
      }`}
    >
      {children}
    </main>
  );
};

export default Content;
