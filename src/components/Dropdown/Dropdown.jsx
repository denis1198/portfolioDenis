import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.css";
import { useState } from "react";
function DropDown() {
  const [openDropdown, setOpenDropdown] = useState(false);

  function changeDropDown() {
    setOpenDropdown(!openDropdown);
  }

  return (
    <Dropdown
      className="dropdownCss"
      onToggle={changeDropDown}
      data-bs-theme="dark"
    >
      <Dropdown.Toggle
        id={openDropdown ? "dropdown-custom-2" : "dropdown-custom-1"}
      >
        Navegar pelo site
      </Dropdown.Toggle>

      <Dropdown.Menu
        className={!openDropdown ? "dropdownCssMenu" : "dropdownCssMenu2"}
      >
        <Dropdown.Item href="#home" className="dropDownItem">
          Início
        </Dropdown.Item>
        <Dropdown.Item href="#about" className="dropDownItem">
          Sobre mim
        </Dropdown.Item>
        <Dropdown.Item href="#" className="dropDownItem">
          Portfolio
        </Dropdown.Item>
        <Dropdown.Item href="#" className="dropDownItem">
          Serviços
        </Dropdown.Item>

        <Dropdown.Item href="#" className="dropDownItem">
          Contato
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
