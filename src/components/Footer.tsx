const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm font-bold tracking-tight">
        Vitto<span className="text-primary">.</span>
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vitto Technologies. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
