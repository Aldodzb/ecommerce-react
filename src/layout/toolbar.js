import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";
import { Link } from "react-router-dom";

import "./toolbar.css";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }
  render() {
    return (
      <div id="layout">
        <Navbar type="dark" theme="primary" expand="md">
          <NavbarBrand>
            {
              <Link to="/" style={{ color: "white" }}>
                Odiazon
              </Link>
            }
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar style={{ width: "100%" }}>
              {/* SEARCH INPUT */}
              <InputGroup seamless>
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput className="border-0" placeholder="Search..." />
              </InputGroup>
            </Nav>

            <Nav navbar style={{ float: "left" }}>
              <NavItem>
                {/*<NavLink active href="#">
                  Active
                </NavLink>*/}
                <NavLink active>
                  <Link
                    to="/products"
                    style={{ color: "white", "white-space": "nowrap" }}
                  >
                    View All Products
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" disabled>
                  {" "}
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Account Info
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/products/add">Add Product</Link>
                  </DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Toolbar;
