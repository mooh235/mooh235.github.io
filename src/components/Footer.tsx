
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 text-center">
      <div className="container">
        <p className="text-muted-foreground">
          &copy; {currentYear} John Doe. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
