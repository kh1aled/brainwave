import "@styles/main.css";
import Nav from "@components/design/Nav";

export const metadata = {
  title: "Brainwave",
  description: "this is AI website",
};



const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/brainwave-symbol.svg" />
      </head>
      <body>
        <Nav />
        {children}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
};

export default Rootlayout;
