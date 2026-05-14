interface HeaderProps {
  logo: string;
  showForm: boolean;
  onShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ logo, showForm, onShowForm }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Hoy aprendí" />
        <h1>Compartí un dato</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => onShowForm((show) => !show)}
      >
        {showForm ? "Cerrar" : "Publicá un dato"}
      </button>
    </header>
  );
}

export default Header;
